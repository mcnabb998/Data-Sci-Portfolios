<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# FEMA Flood Insurance Claim Prediction Model 🏚️💧📈

**Estimating the likelihood of a home filing a flood insurance claim based on FEMA NFIP data.** This project builds a machine‑learning pipeline to predict which properties are most at risk using open FEMA claims and policy data. We engineer geographical and structural features and train gradient boosting models to produce early warning scores for insurers and homeowners.

> **Headline:** Only ~5 % of policies ever file a claim, but location and building characteristics enable risk models with a ROC‑AUC of 0.82.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| 10‑slide video (7 min) | ✅ in repository |
| Code & notebooks | ✅ completed |
| Baseline claim‑risk model | ✅ completed |

---

## 🔍 Research Questions

1. **Risk factors** – Which property attributes (e.g., flood zone, elevation, year built) correlate most with claim history?
2. **Predictability** – How accurately can we predict claim probability from location and structural features?
3. **Mitigation impact** – Does investment in flood defences or recent elevation retrofits reduce predicted risk?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Claims are highly imbalanced – only ~5 % of policies result in claims | `notebooks/01_EDA.ipynb` |
| Properties in FEMA zones A & V exhibit 3× higher claim odds than Zone X | `results/flood_zone_odds.png` |
| Gradient boosted trees achieve ROC‑AUC 0.82 and identify top risk factors | `results/roc_curve.png` |
| Recent mitigation grants lower predicted risk by ~18 % on average | `results/mitigation_effect.png` |

---

## 🗂️ Repository Layout

```
projects/fema-flood-claims/
├── data/                # raw FEMA NFIP policy & claim exports
├── notebooks/           # EDA, modeling & evaluation notebooks
├── results/             # figures and model artefacts
├── report/              # white paper and presentation
└── README.md
```

---

## ⚙️ Quick Start

```bash
# clone the portfolio and navigate to project
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/fema-flood-claims

# create environment
 conda env create -f environment.yml
 conda activate fema-claims

# run the full pipeline
 make all
```

`make all` cleans the data, engineers features, trains the gradient boosting model and saves evaluation figures.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Model |
|-------|--------------|
| Ingest | FEMA NFIP policy & claim CSVs |
| Clean  | pandas ETL scripts |
| Features | flood zone, base flood elevation, construction year, coverage amount |
| Model | Gradient boosting classifier (XGBoost) |
| Evaluate | ROC‑AUC, precision‑recall curves, SHAP importance |

---

## 📈 Reproduce Every Figure

```bash
 jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
 jupyter nbconvert --execute --to notebook --inplace notebooks/02_Modeling.ipynb
```

Figures update under `results/`, and the notebooks record runtime logs.

---

## 🤖 Run the Modeling Notebook

`notebooks/02_Modeling.ipynb` trains the claim‑risk model. Ensure processed files from the EDA step exist before running.

---

## 🛡️ Ethical & Fairness Guard‑Rails

* Data contains no personally identifiable information (policies are aggregated by geography).
* Risk scores should be communicated alongside uncertainty and not be used to deny coverage without human review.
* Models are for illustrative purposes; real underwriting requires actuarial oversight.

---

## 🤝 Contributing

Bug reports and pull requests welcome—see `CONTRIBUTING.md`.

---

## 📜 License

Code released under the MIT License. FEMA data is public domain.

---

## 📚 References

- FEMA National Flood Insurance Program OpenFEMA Dataset
- Smith J. et al. (2022) *Predicting Flood Claim Frequency with Machine Learning.*