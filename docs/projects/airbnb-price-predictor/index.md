---
title: Airbnb Price Predictor
---

# Airbnb Price Predictor 🏠💵

**Modelling nightly prices for Airbnb listings in New York City.** Using the Inside Airbnb dataset from 2023, this project explores what drives price differences, trains a state‑of‑the‑art model and examines fairness across boroughs.

> **Headline:** Gradient boosting explains **64 %** of the variance in log prices; property type, room type and location are the top drivers.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| Slide deck | ✅ in repository |
| Code & notebooks | ✅ completed |
| Price model | ✅ completed |

---

## 🔍 Research Questions

1. **Feature impacts** – Which listing attributes (room type, host experience, neighbourhood) most influence price?
2. **Model performance** – How do linear regression, random forest, gradient boosting and neural networks compare on log‑price prediction?
3. **Fairness** – Do prediction errors vary systematically across boroughs or property types?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Tree‑based models explain ~64 % of variance in log prices | `results/fig5_feature_importance.png` |
| Room and property type are the strongest predictors, followed by capacity and location | `results/fig2_price_room_type.png` |
| Manhattan listings have the highest median price; the Bronx and Staten Island the lowest | `results/fig3_price_borough.png` |
| Fairness analysis shows modest differences in error across boroughs | white paper |

---

## 🗂️ Repository Layout

```
projects/airbnb-price-predictor/
├── data/              # compressed listings CSV
├── notebooks/         # EDA and modeling notebooks
├── results/           # figures and slide deck
├── report/            # white paper
└── README.md
```

---

## ⚙️ Quick Start

```bash
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/airbnb-price-predictor

 conda env create -f environment.yml
 conda activate airbnb-price

 make all
```

`make all` prepares the data, engineers features, trains the price models and reproduces the figures.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Model |
|-------|--------------|
| Ingest | Inside Airbnb listings CSV |
| Clean | remove outliers, adjust for hosts with few listings |
| Features | room type, property type, neighbourhood group, host listing count, minimum nights, availability |
| Models | Linear regression, random forest, gradient boosting, neural network |
| Evaluate | R², MAE, cross‑validation; fairness metrics across boroughs |

---

## 🛡️ Ethical & Fairness Guard‑Rails

* Pricing recommendations should not be used to discriminate; we report error rates across demographic geographies.
* Data is anonymised and aggregated.

---

## 🤝 Contributing

Bug reports and pull requests welcome.

---

## 📜 License

MIT License. Inside Airbnb data is provided under its own terms.