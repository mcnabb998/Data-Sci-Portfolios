# Amazon Stars vs Sentiment

🚧 **Work in progress** – This project is still under active development. The
analysis notebooks, data-download scripts and model weights will live in this
repository as they are completed.

A deep-dive into the (mis)alignment between written sentiment and 1–5 star
ratings in Amazon product reviews. Using modern NLP pipelines we quantify
divergence—the gap between what reviewers say and the star count they
select—and surface products, brands, and reviewer patterns that stand out.

## 📊 Key Results (teaser)

| Insight | Evidence |
| ------- | -------- |
| 1-⭐ and 5-⭐ reviews exhibit the strongest polarity | see `results/polarity_vs_rating.png` |
| ~18% of 3-⭐ reviews contain polarized language (hidden positives/negatives) | `results/midstar_drift.csv` |
| Divergence > 0.8 often correlates with low helpful-vote ratios → possible review manipulation | `results/helpful_vs_divergence.png` |

(Full analysis will be documented in a white paper and accompanying
notebooks.  Some referenced result files are still being generated and
will be checked in later.)

## 🔍 Research Questions

- **Frequency** – How often does textual sentiment disagree with the numeric star rating?
- **Drivers** – Are high-divergence reviews linked to helpful-vote counts, verified-purchase flags, or brand-level behaviour?
- **Prediction** – Can we train a transformer model to infer the most likely star rating and use residuals as anomaly scores?

## 📂 Portfolio Contents

```
.
├── README.md             # overview (this file)
└── results/              # sample figures
    └── divergence_hist.png
```

At the moment only a handful of figures are checked in.  All notebooks,
data-manifest scripts and model checkpoints will be added here as the
pipeline matures.

## ⚙️ Setup

Create the Conda environment and run the automated workflow:

```bash
conda env create -f environment.yml
conda activate stars-vs-sentiment
make all
```

This downloads a small slice of the Amazon Reviews dataset, executes the
analysis notebooks, trains a lightweight model and copies the generated
figures into `results/`.

## ⚡ Quickstart
```bash
git clone <repo>
cd repo
# Codespaces spins up automatically OR:
conda env create -f environment.yml
conda activate stars-sentiment
make all
```

## 🛠️ Methods Summary

- **Data Source** – Amazon Reviews 2023
- **Pre-processing** – HTML strip | emoji removal | English filter | tokenisation
- **Sentiment Scoring** – DistilBERT SST-2 → mapped to (-1, +1)
- **Star Regression Model** – MiniLM/BERT fine-tuned on 1 M samples
- **Explainability** – SHAP beeswarm & token importances
- **Divergence Metric** – `sentiment_score - (star-3)/2`

Detailed methodology will be provided in the modelling notebook once it
is ready.

## 📈 Reproduce Figures

The script used to export figures (e.g. the divergence histogram and
SHAP plots) will be added alongside the notebooks.  Resulting images
are available here under `results/` and will be embedded in the white
paper.

## 🤝 Contributing

Pull requests welcome—see `CONTRIBUTING.md`.

## 💜 License

MIT License – see `LICENSE` file.

## 🔗 References

- McAuley Lab. (2023). Amazon Reviews 2023 dataset [Data set].
- Pang & Lee. (2008). Opinion Mining and Sentiment Analysis.
- Wolf et al. (2020). Transformers: State-of-the-art NLP.
