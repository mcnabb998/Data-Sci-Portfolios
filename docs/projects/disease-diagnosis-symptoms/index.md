<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# Disease Diagnosis from Symptoms ⚕️🔍

**Building a toy classifier to predict diseases from self‑reported symptoms.** Using a public medical dataset of patient records and symptom descriptions, this project demonstrates data encoding and classification techniques for multi‑label diagnosis. It illustrates the challenges of class imbalance and interpretability in healthcare AI.

> **Headline:** A gradient boosting classifier achieves **85 % accuracy** in assigning the correct disease among 10 common conditions based on symptom inputs.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| 5‑minute summary deck | ✅ in repository |
| Code & notebooks | ✅ completed |
| Baseline diagnosis model | ✅ completed |

---

## 🔍 Research Questions

1. **Symptom encoding** – How can we encode categorical symptom descriptions for use in machine learning?
2. **Model performance** – How do Naive Bayes, decision trees and gradient boosting compare on diagnosis accuracy?
3. **Interpretability** – Which symptoms are most influential in predicting each disease?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| One‑hot encoding of symptoms outperforms label encoding for tree models | `notebooks/01_FeatureEngineering.ipynb` |
| Gradient boosting classifier achieves 0.85 accuracy and 0.83 F1 on test set | `results/model_performance.png` |
| SHAP values identify hallmark symptom‑disease associations (e.g., “fever + cough” → Influenza) | `results/shap_summary.png` |
| Class imbalance handled via stratified resampling improves rare disease recall by 12 % | `notebooks/02_Resampling.ipynb` |

---

## 🗂️ Repository Layout

```
projects/disease-diagnosis-symptoms/
├── data/               # symptom-disease CSV
├── notebooks/          # EDA, preprocessing, modeling
├── results/            # confusion matrices and SHAP plots
├── report/             # white paper and slides
└── README.md
```

---

## ⚙️ Quick Start

```bash
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/disease-diagnosis-symptoms

 conda env create -f environment.yml
 conda activate disease-dx

 make all
```

`make all` cleans and encodes the data, trains several classifiers, evaluates them and generates summary figures.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Model |
|-------|--------------|
| Ingest | Public symptoms–disease dataset |
| Clean | handle missing symptom entries, unify synonyms |
| Encode | one‑hot encoding of symptoms; multi-label binarization |
| Models | Naive Bayes, Decision Tree, Gradient Boosting |
| Evaluate | Accuracy, F1 score, confusion matrix; SHAP for interpretability |

---

## 🛡️ Ethical & Fairness Guard‑Rails

* Data is de‑identified; however this model should **not** be used for real medical decisions.
* The toy nature of the dataset means predictions are illustrative only and not diagnostic advice.

---

## 🤝 Contributing

Pull requests welcome. Please follow health‑data ethics guidelines.

---

## 📜 License

MIT License. Dataset released under a permissive academic license.

---

## 📚 References

- Raschka S. et al. (2020) *Machine Learning for Healthcare.*
- Lundberg S. & Lee S. (2017) *A Unified Approach to Interpreting Model Predictions.*