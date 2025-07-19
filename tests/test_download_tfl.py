import sys
import os
import pytest
import responses
import tempfile
import pandas as pd
from pathlib import Path
from analysis.london_underground.download_tfl_upgrade_data import download_public_almanac, download_rods, RODS_URL, RODS_PARQUET, EXCESS_JOURNEY_CSV, LOST_CUSTOMER_CSV

@responses.activate
def test_download_public_almanac(tmp_path):
    outdir = tmp_path
    download_public_almanac(outdir)
    assert (Path(outdir) / EXCESS_JOURNEY_CSV).exists()
    assert (Path(outdir) / LOST_CUSTOMER_CSV).exists()
    # Check contents
    df1 = pd.read_csv(Path(outdir) / EXCESS_JOURNEY_CSV)
    df2 = pd.read_csv(Path(outdir) / LOST_CUSTOMER_CSV)
    assert "excess_journey_time" in df1.columns
    assert "lost_customer_hours" in df2.columns

@responses.activate
def test_download_rods(tmp_path):
    outdir = tmp_path
    responses.add(
        responses.GET,
        RODS_URL,
        body=b"parquetdata",
        status=200,
        content_type="application/octet-stream"
    )
    # Should create a parquet file
    download_rods(outdir, "id", "key")
    assert (Path(outdir) / RODS_PARQUET).exists()

# To run the tests:
# pytest -q tests/test_download_tfl.py
