import os
from pathlib import Path
import pandas as pd
import pytest

RAW     = Path(__file__).resolve().parents[3] / "data" / "raw"
WORKSPACE = Path(__file__).resolve().parents[1]
INTERIM = WORKSPACE / "projects" / "london-underground-upgrades" / "data" / "interim"

PARQUETS = [
    "excess_journey_time.parquet",
    "kilometres_operated.parquet",
    "lost_customer_hours.parquet",
    "lu_performance_long.parquet",
    "service_operated.parquet",
]

def test_parquet_files_exist_and_nonempty():
    for fname in PARQUETS:
        fpath = INTERIM / fname
        print(f"Checking: {fpath}")
        assert fpath.exists(), f"Missing: {fname}"
        df = pd.read_parquet(fpath)
        assert len(df) > 0, f"Empty: {fname}"
