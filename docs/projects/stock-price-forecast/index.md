<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# Stock Price Trend Forecasting 📈🗓️

**Exploring time series models to forecast short‑term stock price movements.** Using historical daily closing prices from multiple S&P 500 stocks, this project compares traditional statistical methods with deep learning models to predict future trends.

> **Headline:** LSTM neural networks reduce mean absolute percentage error by **12 %** over ARIMA baselines on 7‑day forecasts.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| 7‑minute slide deck | ✅ in repository |
| Code & notebooks | ✅ completed |
| Forecast models | ✅ completed |

---

## 🔍 Research Questions

1. **Modeling approaches** – How do ARIMA, Prophet and LSTM compare when forecasting short‑term stock price trends?
2. **Feature engineering** – Does incorporating technical indicators (moving averages, RSI) improve forecasting performance?
3. **Generalization** – How well do models trained on one stock perform on others?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| ARIMA captures seasonality but struggles with sudden shocks | `results/arima_residuals.png` |
| LSTM with 60‑day window and 2 hidden layers achieves MAPE 0.035 vs ARIMA 0.04 | `results/model_comparison.png` |
| Adding RSI and MACD features improves Prophet forecast by 8 % | `notebooks/02_FeatureEngineering.ipynb` |
| Models trained on tech stocks generalise poorly to utility stocks | `results/cross_stock_evaluation.png` |

---

## 🗂️ Repository Layout

```
projects/stock-price-forecast/
├── data/               # daily price CSVs from yfinance
├── notebooks/          # data prep, ARIMA, Prophet, LSTM
├── results/            # prediction plots and metrics
├── report/             # white paper and slides
└── README.md
```

---

## ⚙️ Quick Start

```bash
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/stock-price-forecast

 conda env create -f environment.yml
 conda activate stock-forecast

 make all
```

`make all` downloads sample ticker data, trains ARIMA, Prophet and LSTM models, and generates evaluation figures.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Model |
|-------|--------------|
| Ingest | Daily close prices via yfinance |
| Clean | handle missing days, adjust for splits |
| Features | Lagged returns, moving averages, RSI, MACD |
| Models | ARIMA, Facebook Prophet, LSTM neural network |
| Evaluate | MAE, MAPE, directional accuracy, cross‑validation |

---

## 📈 Reproduce Every Figure

```bash
 jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
 jupyter nbconvert --execute --to notebook --inplace notebooks/02_Models.ipynb
```

---

## 🛡️ Ethical & Fairness Guard‑Rails

* This analysis is for educational purposes; it is not financial advice.
* Historical performance does not guarantee future returns.

---

## 🤝 Contributing

Contributions welcome; open an issue to propose changes.

---

## 📜 License

MIT License. Price data sourced under Yahoo Finance Terms of Service.

---

## 📚 References

- Hyndman R. et al. (2008) *Forecasting: Principles and Practice.*
- Hochreiter S. & Schmidhuber J. (1997) *Long Short‑Term Memory.*