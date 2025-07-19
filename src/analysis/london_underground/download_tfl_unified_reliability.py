#!/usr/bin/env python3
"""
download_tfl_unified_reliability.py
----------------------------------
Pulls daily line‑status data from TfL’s *Unified API* and builds a
`reliability_daily.csv` table:

    date,line,p_good_service          # share of the day with sev == 10

You **do not** need `app_id`; only the Unified‑API `app_key`.
"""
import argparse, os, sys, time, datetime as dt, json, requests, pandas as pd
from typing import Optional
from pathlib import Path

RAW_JSON   = "line_status_raw.jsonl"
RELIAB_CSV = "reliability_daily.csv"
BASE       = "https://api.tfl.gov.uk"
GOOD_SEV   = 10                       # “Good Service” severity code

# Unified‑API canonical line IDs (lower‑case, hyphenated)
VALID_IDS = [
    "bakerloo","central","circle","district","hammersmith-city",
    "jubilee","metropolitan","northern","piccadilly","victoria",
    "waterloo-city"
]

# --------------------------------------------------------------------------- #
def get_key(cli_key: Optional[str]) -> str:
    key = cli_key or os.getenv("TFL_APP_KEY_UNIFIED")
    if not key:
        sys.exit("❌  Provide --app-key or set TFL_APP_KEY_UNIFIED env var.")
    return key

def tfl_get(url: str, *, max_retries=3, backoff=30) -> requests.Response:
    for attempt in range(1, max_retries + 1):
        r = requests.get(url, timeout=60)
        if r.status_code != 429:
            return r
        wait = max(int(r.headers.get("Retry-After", backoff)), 1)
        print(f"⚠️  429 Rate‑limited – sleeping {wait}s (attempt {attempt}/{max_retries})")
        time.sleep(wait)
    sys.exit(f"❌  Failed after {max_retries} retries → {url}")

def parse_status(day_json: list[dict]) -> list[dict]:
    rows = []
    for item in day_json:            # one per line
        line = item["id"]
        for s in item.get("lineStatuses", []):
            sev  = s["statusSeverity"]
            # Each validityPeriod can straddle midnight; we only want the date portion
            for vp in s.get("validityPeriods", []):
                date = vp["fromDate"][:10]     # YYYY‑MM‑DD
                rows.append({"date": date, "line": line,
                             "good": int(sev == GOOD_SEV)})
    return rows

# --------------------------------------------------------------------------- #
def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--outdir", default="projects/london-underground-upgrades/data")
    p.add_argument("--app-key", help="TfL Unified‑API app_key")
    p.add_argument("--lines", nargs="*", default=VALID_IDS,
                   help="Lower‑case line IDs (max 20, default = all tube lines)")
    p.add_argument("--start-date", default="2023-01-01")
    p.add_argument("--end-date",   default="2023-01-31")
    args = p.parse_args()

    key  = get_key(args.app_key)
    Path(args.outdir).mkdir(parents=True, exist_ok=True)

    # Use CLI arguments and environment variable only
    ids = ",".join(args.lines)
    url = (f"{BASE}/Line/{ids}/Status/"
           f"{args.start_date}/to/{args.end_date}"
           f"?detail=true&app_key={key}")

    print(f"➡️  Downloading status for {ids} …")
    resp = tfl_get(url)
    if resp.status_code != 200:
        sys.exit(f"❌  HTTP {resp.status_code} → {url}")

    # Save raw JSONL (one line per line‑object)
    raw_path = Path(args.outdir, RAW_JSON)
    with raw_path.open("w", encoding="utf-8") as f:
        for line_obj in resp.json():
            f.write(json.dumps(line_obj) + "\n")
    print(f"✓ Raw JSON written → {raw_path}")

    # Build reliability table
    rows = parse_status(resp.json())
    if not rows:
        sys.exit("❌  No status records parsed — check date range & IDs.")

    df = (pd.DataFrame(rows)
              .groupby(["line", "date"], as_index=False)
              .agg(p_good_service=("good", "mean")))   # share of day good

    csv_path = Path(args.outdir, RELIAB_CSV)
    df.to_csv(csv_path, index=False)
    print(f"✓ Reliability CSV written → {csv_path}  ({len(df)} rows)")

# --------------------------------------------------------------------------- #
if __name__ == "__main__":
    main()
