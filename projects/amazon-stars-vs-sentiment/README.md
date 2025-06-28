
# Amazon “Stars vs Sentiment” 📦⭐️📝

**A complete investigation of how often Amazon star ratings disagree with the
written sentiment of the reviews that accompany them.**  
Using one million Clothing • Shoes • Jewelry reviews from the 2023 Amazon
corpus, we measure *sentiment drift*, visualise its distribution, and show how a
simple **divergence score** can power trust dashboards, seller alerts, and
spam-detection pipelines.

> **Headline:** 64 % of reviews are self‑consistent, yet **11 % differ by more
> than one full star** between text and rating—enough to mislead buyers and
> skew ranking models.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | — |
| 10‑slide video (7 min) | — |
| Code & notebooks | ✅ pushed to `main` |
| MiniLM star‑prediction fine‑tune | 🔄 optional – planned Q4 2025 |

---

## 🔍 Research Questions

1. **Frequency** – How often does textual sentiment disagree with star ratings?  
2. **Drivers** – Do helpful votes, verified purchases, or brand patterns
   explain high drift?  
3. **Prediction** – Can the residual between text sentiment and expected stars
   signal review manipulation?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| 64 % of reviews align (divergence ≈ 0) | `results/divergence_hist.png` |
| **11 %** exceed ± 1 divergence → strong mis‑match | histogram tails |
| Average drift **+ 0 .04** → mild positivity bias | white‑paper § 6 |
| Verified‑purchase reviews show 40 % lower drift odds | Appendix C Q4 |
| Divergence + meta features ⇒ precision 0.55 for spam | Appendix C Q7 |

_Divergence = sentiment score − normalised star, where stars 1‑5 map to
−1…+1._

---

## 🗂️ Repository Layout
```
.
├── data/                         # parquet slices & model artefacts
├── notebooks/
│   └── 01_EDA.ipynb             # sentiment, divergence, figures
├── scripts/
│   └── get_data.py              # streaming download + sample
├── results/
│   ├── star_counts.png
│   ├── divergence_hist.png
│   ├── polarity_vs_rating.png
│   └── helpful_vs_divergence.png
├── environment.yml
└── README.md                    # this file
```
---

## ⚙️ Quick Start
```bash
git clone https://github.com/<your‑org>/stars-vs-sentiment.git
cd stars-vs-sentiment

# 1.  Create environment
conda env create -f environment.yml
conda activate stars-sentiment

# 2.  End‑to‑end run  (≈ 15 min CPU • 4 min single A10 GPU)
make all
```
`make all` streams a one‑million‑row sample, scores sentiment with DistilBERT,
computes divergence, and regenerates every figure under `results/`.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Model |
|-------|--------------|
| Ingest | HF datasets → 1 M stratified rows |
| Clean  | HTML strip • emoji removal • language filter |
| Sentiment | DistilBERT SST‑2 (binary ± 1) |
| Divergence | `sentiment − (star−3)/2` |
| EDA | pandas & seaborn |
| Spam test | XGBoost on divergence + length + account‑age |
| Compute | CPU 15 min / A10 GPU 4 min |

Full details—including assumptions, limitations, and ethical controls—are in
Sections 5‑14 of the PDF.

---

## 📈 Reproduce Every Figure
```bash
jupyter nbconvert --execute --to notebook   --inplace notebooks/01_EDA.ipynb
```
All PNGs refresh under `results/`, and the notebook records runtime logs.

---

## 🛡️ Ethical & Fairness Guard‑Rails
* Reviewer IDs hashed; no PII stored.  
* Fairness dashboard flags any subgroup with drift > 0 .05.  
* Divergence badge shown only after 30 reviews to deter gaming.  
* Human moderation required before penalties.

---

## 🤝 Contributing
Bug reports and pull requests welcome—see `CONTRIBUTING.md`.

---

## 📜 License
* Code — MIT License  
* Review text — Amazon Research License (non‑commercial)

---

## 📚 References
Hou Y. et al. (2024) *Bridging Language and Items for Retrieval and Recommendation.* arXiv 2403.03952  
Mukherjee A. et al. (2013) *What Yelp Fake Review Filter Might Be Doing?* WWW Companion  
Sanh V. et al. (2019) *DistilBERT, a Distilled Version of BERT.* arXiv 1910.01108  
