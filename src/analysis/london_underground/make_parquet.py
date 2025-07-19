#!/usr/bin/env python3
"""
make_parquet.py
ETL script for LU upgrades project: converts raw CSV/XLSX files to cleaned Parquet files.
"""
import sys
import argparse
from pathlib import Path
import pandas as pd

WORKSPACE = Path(__file__).resolve().parents[3]
RAW = WORKSPACE / "projects" / "london-underground-upgrades" / "data" / "raw"
INTERIM = WORKSPACE / "projects" / "london-underground-upgrades" / "data" / "interim"
INTERIM.mkdir(exist_ok=True)

CSV_FILES = [
    ("excess-journey-time.csv",      "excess_journey_time.parquet"),
    ("lost-customer-hours.csv",      "lost_customer_hours.parquet"),
    ("kilometres-operated.csv",      "kilometres_operated.parquet"),
    ("service-operated.csv",         "service_operated.parquet"),
]
XLSX_FILE = ("lu-performance-data.xlsx", "lu_performance_long.parquet")

# --- Cleaning helpers ---
def clean_line(line):
    return str(line).strip().lower().replace(" ", "-").replace("&", "and")

def clean_period(period):
    # Assume YYYY-MM-DD or similar
    return pd.to_datetime(period, errors="coerce")

def clean_numeric(df):
    for col in df.select_dtypes(include=["number"]):
        df[col] = pd.to_numeric(df[col], errors="coerce").astype("float32")
    return df

def etl_csv(raw_name, out_name, force):
    raw_path = RAW / raw_name
    out_path = INTERIM / out_name
    if out_path.exists() and not force:
        print(f"⏩ {out_name} exists, skipping.")
        return
    df = pd.read_csv(raw_path)
    if "Period" in df:
        df["Period"] = df["Period"].map(clean_period)
    if "Line" in df:
        df["Line"] = df["Line"].map(clean_line).astype("category")
    df = clean_numeric(df)
    df.to_parquet(out_path, engine="pyarrow", compression="zstd")
    rows = len(df)
    size = out_path.stat().st_size / 1e6
    print(f"✓ saved {out_name} → {rows} rows ({size:.1f} MB)")

def etl_xlsx(raw_name, out_name, force):
    raw_path = RAW / raw_name
    out_path = INTERIM / out_name
    if out_path.exists() and not force:
        print(f"⏩ {out_name} exists, skipping.")
        return
    dfs = []
    xls = pd.ExcelFile(raw_path)
    for sheet in xls.sheet_names:
        df = xls.parse(sheet)
        df["sheet"] = sheet
        df = df.rename(columns={c: c.lower().replace(" ", "_") for c in df.columns})
        df = df.dropna(how="all")
        dfs.append(df)
    long_df = pd.concat(dfs, ignore_index=True)
    if "period" in long_df:
        long_df["period"] = long_df["period"].map(clean_period)
    long_df = clean_numeric(long_df)
    # Convert all object-type columns to string to avoid ArrowTypeError
    for col in long_df.select_dtypes(include=["object"]):
        long_df[col] = long_df[col].astype(str)
    long_df.to_parquet(out_path, engine="pyarrow", compression="zstd")
    rows = len(long_df)
    size = out_path.stat().st_size / 1e6
    print(f"✓ saved {out_name} → {rows} rows ({size:.1f} MB)")

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--force", action="store_true", help="Overwrite existing Parquet files")
    args = p.parse_args()
    for raw_name, out_name in CSV_FILES:
        etl_csv(raw_name, out_name, args.force)
    etl_xlsx(*XLSX_FILE, args.force)

if __name__ == "__main__":
    main()
