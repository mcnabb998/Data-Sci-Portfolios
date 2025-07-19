import argparse
import os
import sys
import requests
import pandas as pd
from pathlib import Path
from dotenv import load_dotenv
load_dotenv()

EXCESS_JOURNEY_CSV = "excess-journey-time.csv"
LOST_CUSTOMER_CSV = "lost-customer-hours.csv"

def get_auth(args):
    app_id = args.app_id or os.environ.get("TFL_APP_ID")
    app_key = args.app_key or os.environ.get("TFL_APP_KEY")
    if not app_id or not app_key:
        print("Missing TfL API credentials. Pass --app-id/--app-key or set TFL_APP_ID/TFL_APP_KEY.")
        sys.exit(1)
    if app_id.lower() in ["unifiedapi", "unified-api", "demo", "xxxxxxxx"]:
        print("WARNING: You are using a demo or placeholder app_id. This will result in instant 429 errors.")
    return app_id, app_key

def add_auth_params(url, app_id, app_key):
    sep = '&' if '?' in url else '?'
    return f"{url}{sep}app_id={app_id}&app_key={app_key}"

def tfl_get(url, max_retries=3):
    attempts = 0
    while attempts < max_retries:
        print(f"Requesting: {url} (Attempt {attempts+1})")
        resp = requests.get(url)
        print(f"Response: {resp.status_code}")
        if resp.status_code == 429:
            wait = int(resp.headers.get('Retry-After', '1')) + 1
            print(f"Rate limited. Waiting {wait}s...")
            import time; time.sleep(wait)
            attempts += 1
            continue
        return resp
    print(f"Failed after {max_retries} attempts: {url}")
    sys.exit(1)

def fetch_paginated_json(url, app_id, app_key):
    results = []
    while url:
        url = add_auth_params(url, app_id, app_key)
        resp = tfl_get(url)
        if resp.status_code != 200:
            print(f"Failed to fetch {url}: {resp.status_code}")
            sys.exit(1)
        data = resp.json()
        results.extend(data if isinstance(data, list) else [data])
        # Pagination
        link = resp.headers.get('Link')
        next_url = None
        if link:
            import re
            match = re.search(r'<([^>]+)>;\s*rel="next"', link)
            if match:
                next_url = match.group(1)
        url = next_url
    return results

def download_ejt(outdir, app_id, app_key, line_ids, period_start, period_end):
    # Unified API: /JourneyTimeStatistics/line/{lineId}?periodStart=...&periodEnd=...
    all_rows = []
    for line in line_ids:
        line_id = line.lower().replace(" ", "-")
        url = f"https://api.tfl.gov.uk/JourneyTimeStatistics/line/{line_id}?periodStart={period_start}&periodEnd={period_end}&app_key={app_key}"
        print(f"Requesting: {url}")
        resp = requests.get(url)
        print(f"Response: {resp.status_code}")
        if resp.status_code == 200:
            data = resp.json()
            if isinstance(data, list):
                all_rows.extend(data)
            else:
                all_rows.append(data)
        else:
            print(f"JourneyTimeStatistics for {line_id} failed: {resp.status_code}")
    if all_rows:
        df = pd.DataFrame(all_rows)
        df.to_csv(os.path.join(outdir, EXCESS_JOURNEY_CSV), index=False)
        print(f"✓ Saved JourneyTimeStatistics – {len(df)} rows")
    else:
        print("No data returned for JourneyTimeStatistics.")

def download_lch(outdir, app_id, app_key, period_start, period_end):
    # Unified API: /LostCustomerHours?periodStart=...&periodEnd=...
    url = f"https://api.tfl.gov.uk/LostCustomerHours?periodStart={period_start}&periodEnd={period_end}"
    data = fetch_paginated_json(url, app_id, app_key)
    df = pd.DataFrame(data)
    df.to_csv(os.path.join(outdir, LOST_CUSTOMER_CSV), index=False)
    print(f"✓ Saved LCH – {len(df)} rows")

def download_rods_year(outdir, app_id, app_key, year):
    # Unified API: /RollingOriginDestinationSurvey/{year}/parquet
    url = f"https://api.tfl.gov.uk/RollingOriginDestinationSurvey/{year}/parquet"
    url = add_auth_params(url, app_id, app_key)
    resp = tfl_get(url)
    if resp.status_code == 200:
        out_path = os.path.join(outdir, f"rods_{year}.parquet")
        with open(out_path, "wb") as f:
            f.write(resp.content)
        print(f"✓ Saved RODS {year} – {len(resp.content)//1024} KB")
    else:
        print(f"RODS {year} download failed: {resp.status_code}")
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="Download and clean TfL upgrade data.")
    parser.add_argument("--outdir", default="projects/london-underground-upgrades/data", help="Output directory for data files.")
    parser.add_argument("--app-id", help="TfL API app_id for endpoints.")
    parser.add_argument("--app-key", help="TfL API app_key for endpoints.")
    parser.add_argument("--years", nargs="*", type=int, help="Years for RODS Parquet download.")
    parser.add_argument("--lines", nargs="*", default=["Bakerloo","Central","Circle","District","Hammersmith","Jubilee","Metropolitan","Northern","Piccadilly","Victoria","Waterloo"], help="Line IDs for EJT.")
    parser.add_argument("--period-start", default="2023-01-01", help="Period start date (YYYY-MM-DD) for KPIs.")
    parser.add_argument("--period-end", default="2023-01-31", help="Period end date (YYYY-MM-DD) for KPIs.")
    args = parser.parse_args()

    Path(args.outdir).mkdir(parents=True, exist_ok=True)
    app_id, app_key = get_auth(args)

    download_ejt(args.outdir, app_id, app_key, args.lines, args.period_start, args.period_end)
    download_lch(args.outdir, app_id, app_key, args.period_start, args.period_end)
    if args.years:
        for year in args.years:
            download_rods_year(args.outdir, app_id, app_key, year)
    print("Download complete.")
    sys.exit(0)

if __name__ == "__main__":
    main()









