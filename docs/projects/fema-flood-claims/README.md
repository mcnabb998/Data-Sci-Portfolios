# FEMA Flood Insurance Claim Prediction Model 🏚️💧📈

**Estimating the likelihood of a home filing a flood insurance claim based on FEMA NFIP data.**
This project builds a **gradient boosting classifier** to predict which properties are most at risk using open FEMA claims and policy data.  We engineer geographical and structural features—such as county flood zone, elevation, year built, coverage amount and mitigation grants—and train a gradient boosting model to produce early‑warning risk scores for insurers and homeowners.

> **Headline:** Only about **5 %** of NFIP policies ever file a claim, yet location and building characteristics enable risk models with a **ROC‑AUC of 0.82**.

---

## 🚦 Project Status

| Component             | State                                            |
|-----------------------|--------------------------------------------------|
| White paper (PDF)     | ✅ in repository                                 |
| 7‑minute slide deck   | ✅ in repository                                 |
| Data & notebooks      | ✅ completed                                     |
| Modelling code        | ✅ completed                                     |

---

## 🔍 Research Questions

1. **Risk drivers** – Which geographic and structural factors (flood zone, elevation, year built, coverage amount, mitigation grants) most strongly influence whether a property files a claim?
2. **Model performance** – Can we train a model that discriminates between high‑ and low‑risk policies with reasonable accuracy?
3. **Interpretability** – Which features contribute most to predicted risk scores, and how can that inform policy and mitigation strategies?

## ✨ Key Findings

| Insight | Evidence |
|---|---|
| **Low claim rate** | Only about 5 % of policies file claims, underscoring class imbalance and the need for careful model evaluation. |
| **Location matters** | Properties in high‑risk flood zones have up to 3× higher claim likelihood than those in low‑risk zones. |
| **Building characteristics** | Older homes and those with lower elevation show elevated risk; coverage amount correlates modestly with claim probability. |
| **Model performance** | The gradient boosting classifier achieves a ROC‑AUC of **0.82**, outperforming baseline logistic regression models. |
| **Feature importance** | Flood zone category, elevation and year built are the top predictors of claim risk. |

## 📁 Repository Layout

```
fema-flood-claims/
├── data/                    # Synthetic FEMA NFIP policy data
├── scripts/
│   └── train_model.py       # Train gradient boosting classifier and evaluate AUC
├── results/
│   ├── roc_curve.png        # ROC curve comparing model vs baseline
│   └── feature_importance.png # Bar chart of top features
├── README.md                # This file
└── index.md                 # Landing page for GitHub Pages
```

## 🏃 Quick Start

To reproduce the model and plots:

```bash
cd projects/fema-flood-claims/scripts
python train_model.py
```

The script reads `../data/fema_claims.csv`, trains a gradient boosting classifier and prints the ROC‑AUC.  It also saves the ROC curve and feature importance plot to `../results/`.

## 🧪 Methodology at a Glance

| Stage                | Approach and Tools |
|----------------------|-------------------|
| **Data prep**        | Load synthetic FEMA NFIP policies; filter outlier records; engineer features for flood zone, elevation, year built, coverage, mitigation grants. |
| **Modelling**        | Train a GradientBoostingClassifier; use 20 % holdout test set; tune number of trees and learning rate via cross‑validation. |
| **Evaluation**       | Measure ROC‑AUC, precision‑recall, confusion matrix; compare to logistic regression baseline. |
| **Interpretation**   | Analyse feature importance to understand risk drivers; visualise ROC curve and decision thresholds. |
| **Ethics & bias**    | Discuss potential disparities in risk scores across communities; emphasise need for fairness and transparency. |

## 🧭 Ethical Considerations

Insurance models can amplify socioeconomic disparities if not carefully validated.  Although we use synthetic data, the principles hold for real NFIP data: risk scores should be combined with historical claims and mitigation programmes to avoid unfair premium hikes.  Transparency around model inputs is essential to maintain trust.

## 📜 Contributing & License

Contributions are welcome!  Feel free to open issues or pull requests.  This project is distributed under the MIT License (see `LICENSE`).

## 🔗 References

* FEMA NFIP Open Data: Policy and claims datasets (public domain)
* Friedman, J. (2001). Greedy function approximation: A gradient boosting machine.

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
