# ---- data/get_data.py  (final fix) ---------------------------------
#!/usr/bin/env python
import argparse, hashlib, datetime
from pathlib import Path
import pandas as pd
from datasets import load_dataset
from tqdm import tqdm

VALID = [
    "raw_review_Clothing_Shoes_and_Jewelry",
    "raw_review_Electronics",
    "raw_review_Beauty_and_Personal_Care",
    # add others if you need them
]

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--category", required=True, choices=VALID)
    ap.add_argument("--rows", type=int, default=1_000_000)
    args = ap.parse_args()

    # Load the dataset using the new pattern
    dataset = load_dataset("McAuley-Lab/Amazon-Reviews-2023", args.category, split="full", trust_remote_code=True)
    # Get the total number of rows if possible (for progress bar)
    try:
        total_rows = dataset["full"].info.splits["full"].num_examples
    except Exception:
        total_rows = None
    rows = []
    last_pct = -1
    for i, row in enumerate(dataset["full"]):
        rows.append(row)
        if i < 5:
            print(f"Sample row {i+1}: {row}")
        elif (i + 1) % 100000 == 0:
            print(f"Row {i+1}: {row}")
        if i + 1 >= args.rows:
            break
        # Print a dot every 10,000 rows for a live trail
        if (i + 1) % 10000 == 0:
            print(".", end="", flush=True)
        if total_rows:
            pct = int(100 * (i + 1) / min(args.rows, total_rows))
            if pct % 5 == 0 and pct != last_pct:
                print(f" {pct}% ({i+1}/{min(args.rows, total_rows)})", flush=True)
                last_pct = pct
    print(f"\nProgress: 100% ({len(rows)}/{min(args.rows, total_rows) if total_rows else args.rows}) - Done!", flush=True)
    df = pd.DataFrame(rows)               # Hugging Face returns list-of-dicts

    out_dir  = Path(__file__).parent
    out_file = out_dir / f"{args.category}_{args.rows}.parquet"
    df.to_parquet(out_file)
    print(f"✅ saved {len(df):,} rows → {out_file}")

    h = hashlib.sha256(pd.util.hash_pandas_object(df, index=True).values).hexdigest()
    with open(out_dir / "DATA_MANIFEST.md", "a") as f:
        f.write(
            f"McAuley-Lab/Amazon-Reviews-2023\t{args.category}\t"
            f"{out_file.name}\t{len(df)}\t{h}\t{datetime.datetime.now().isoformat()}\n"
        )

if __name__ == "__main__":
    main()
