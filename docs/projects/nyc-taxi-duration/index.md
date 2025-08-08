<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# NYC Taxi Trip Duration Model 🚕⏱️

**Predicting how long a taxi trip will take in New York City using TLC trip records.** This project demonstrates feature engineering and regression modeling for travel‑time prediction on millions of taxi rides. We clean the data, extract spatial and temporal features, and compare linear, tree‑based and neural network models.

> **Headline:** A gradient boosting model reduces mean absolute error by **22 %** relative to a naive average baseline.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| 5‑minute presentation | ✅ in repository |
| Code & notebooks | ✅ completed |
| Baseline duration model | ✅ completed |

---

## 🔍 Research Questions

1. **Feature importance** – Which factors most influence trip duration (distance, pickup location, time of day, traffic, weather)?
2. **Model comparison** – How do linear regression, random forest, gradient boosting and neural nets perform on duration prediction?
3. **Fairness** – Do model errors differ systematically across boroughs or for trips to certain destinations (e.g., airports)?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Trip distance explains ~60 % of duration variance; pickup/dropoff coordinates add another 20 % | `results/feature_importance.png` |
| Gradient Boosting Regressor achieves MAE 2.8 minutes vs baseline 3.6 minutes | `results/model_comparison.png` |
| Neural network offers marginal improvement but higher runtime | `notebooks/03_NeuralNet.ipynb` |
| Error distribution slightly higher for outer‑borough trips | `results/error_by_borough.png` |

---

## 🗂️ Repository Layout

```
projects/nyc-taxi-duration/
├── data/              # 2016 TLC yellow cab trip parquet files
├── notebooks/         # EDA, feature engineering, modeling
├── results/           # plots and metrics
├── report/            # white paper and presentation
└── README.md
```

---

## ⚙️ Quick Start

```bash
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/nyc-taxi-duration

 conda env create -f environment.yml
 conda activate nyc-taxi

 make all
```

`make all` downloads a sample dataset, extracts features, fits baseline and gradient boosting models, and saves evaluation figures.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Approach |
|-------|-----------------|
| Ingest | TLC trip data (parquet) |
| Clean | filter outliers, handle missing GPS |
| Features | Haversine distance, pickup/dropoff coordinates, passenger count, hour of day, day of week, weather |
| Model | Linear regression, random forest regressor, gradient boosting regressor |
| Evaluate | MAE, RMSE, R²; cross‑validation; feature importance |

---

## 📈 Reproduce Every Figure

```bash
 jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
 jupyter nbconvert --execute --to notebook --inplace notebooks/02_Modeling.ipynb
```

---

## 🛡️ Ethical & Fairness Guard‑Rails

* No personal data (passengers are anonymous).
* We monitor error distribution across neighbourhoods to ensure equitable predictions.

---

## 🤝 Contributing

Contributions welcome. See `CONTRIBUTING.md` for guidelines.

---

## 📜 License

MIT License. TLC trip data is publicly licensed.

---

## 📚 References

- New York City Taxi & Limousine Commission 2016 Trip Data
- Breiman L. (2001) *Random Forests.*