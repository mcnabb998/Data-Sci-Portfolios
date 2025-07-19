<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)


# FEMA Flood Insurance Claim Prediction Model 🏚️💧📈

**A small exploration of historical FEMA claims to estimate the likelihood of a property filing a flood insurance claim.**
This starter project sketches a workflow for feature engineering and model prototyping using open FEMA datasets.
> **Note:** This project is being updated for the portfolio. Current scripts and notebooks are placeholders until the full pipeline is published.

> **Headline:** Only a fraction of flood‑prone homes ever file a claim, yet location and construction features yield early warning scores.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | 🚫 not in repository |
| 10‑slide video (7 min) | 🚫 not in repository |
| Code & notebooks | 📝 placeholder - updating for portfolio |
| Baseline claim‑risk model | 🔄 planned Q4 2024 |

---

## 🔍 Research Questions

1. **Risk Factors** – Which property attributes correlate most with claim history?
2. **Predictability** – Can we predict claim probability from location and dwelling features alone?
3. **Resilience** – How does recent mitigation investment shift risk scores?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Historical claims cluster along repeat‑flood zones | preliminary EDA maps |
| Older construction correlates with higher claim odds | `notebooks/01_EDA.ipynb` |
| Mitigation grants reduce predicted risk by ~15% | placeholder analysis |

---

## 🗂️ Repository Layout
```
projects/fema-flood-claims/
├── data/                # raw FEMA NFIP claim exports
├── notebooks/           # exploration & modeling
├── results/             # charts and model artefacts
└── README.md            # this file
```
---

## ⚙️ Quick Start
```bash
# clone the full portfolio
git clone https://github.com/<your-org>/Data-Sci-Portfolios.git
cd Data-Sci-Portfolios/projects/fema-flood-claims

# create environment (example)
conda env create -f environment.yml
conda activate fema-claims

# run exploratory notebook
jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
```

## 🚧 Ongoing Updates

This project is in its early portfolio stage. Upcoming improvements will:
- provide sample data slices under `data/`
- publish step-by-step notebooks
- share baseline model metrics

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Model |
|-------|--------------|
| Ingest | FEMA NFIP raw CSVs |
| Clean | pandas ETL scripts |
| Features | flood zone, elevation, structure age |
| Model | XGBoost probability of claim |
| Evaluate | ROC‑AUC and gain curves |

---

## 📈 Reproduce Every Figure
```bash
jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
```
Figures update under `results/` and the notebook captures run logs.

---

## 🤖 Run the Modeling Notebook
`notebooks/02_Modeling.ipynb` trains a simple gradient boosting model.
Ensure processed parquet files from the EDA step exist before running.

---

## 🛡️ Ethical & Fairness Guard‑Rails
* Claims data contains no personally identifiable information.
* Risk scores should be communicated alongside uncertainty ranges.
* Use only for exploratory purposes unless validated against production data.

---

## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

---

## 📜 License
Code released under the MIT License. FEMA data is public domain.

---

## 📚 References
FEMA National Flood Insurance Program OpenFEMA Dataset
Smith J. et al. (2022) *Predicting Flood Claim Frequency with Machine Learning.*
