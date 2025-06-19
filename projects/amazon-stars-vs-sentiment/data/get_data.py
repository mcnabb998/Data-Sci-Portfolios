#!/usr/bin/env python
import argparse
import hashlib
from pathlib import Path

import pandas as pd
from datasets import load_dataset


def main():
    parser = argparse.ArgumentParser(description="Download Amazon reviews slice")
    parser.add_argument("--category", default="Clothing_Shoes_and_Jewelry")
    parser.add_argument("--rows", type=int, default=1000)
    args = parser.parse_args()

    ds = load_dataset("amazon_us_reviews", args.category, split="train", streaming=True)

    rows = []
    for i, row in enumerate(ds):
        rows.append(row)
        if i + 1 >= args.rows:
            break
    df = pd.DataFrame(rows)

    out_dir = Path(__file__).resolve().parent
    out_file = out_dir / f"{args.category}_{args.rows}.parquet"
    df.to_parquet(out_file)

    # compute hash
    h = hashlib.sha256(pd.util.hash_pandas_object(df, index=True).values).hexdigest()
    manifest_path = out_dir / "DATA_MANIFEST.md"
    with open(manifest_path, "a") as f:
        f.write(f"{out_file.name}\t{len(df)}\t{h}\n")


if __name__ == "__main__":
    main()
