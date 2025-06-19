import argparse
import shutil
from pathlib import Path

FIGURES = [
    'star_counts.png',
    'divergence_hist.png',
    'polarity_vs_rating.png',
    'helpful_vs_div.png',
    'shap_top20.png'
]

def main(out_dir):
    out_path = Path(out_dir)
    out_path.mkdir(parents=True, exist_ok=True)
    for fig in FIGURES:
        src = Path('results') / fig
        if src.exists():
            shutil.copy2(src, out_path / fig)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Export key figures')
    parser.add_argument('--out_dir', default='results', help='destination directory')
    args = parser.parse_args()
    main(args.out_dir)
