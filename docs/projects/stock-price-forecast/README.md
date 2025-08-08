# Stock Price Return Forecasting

In this mini‑project a simple time‑series regression model is built to predict short‑term stock returns from historical returns.  A synthetic price series is generated to illustrate feature engineering, lagged variables and model evaluation using a random forest regressor.

## Data

The synthetic dataset `data/stock.csv` contains daily closing prices for a hypothetical stock along with computed features:

| Column      | Description                                           |
|------------|-------------------------------------------------------|
| `date`      | Date of observation                                   |
| `close`     | Simulated closing price                               |
| `return`    | Daily return computed as percentage change of `close` |
| `lag1`–`lag3` | Returns lagged by 1–3 days                           |
| `next_return`| The target: next‑day return                          |

The series is generated via a random walk with a mild upward trend and Gaussian noise.  It does not reflect real financial data.

## Usage

To fit the return‑forecasting model and see its error metric:

```bash
# from the repository root
cd projects/stock-price-forecast/scripts
python train_model.py
```

The script trains a `RandomForestRegressor` on the lagged return features and prints the mean absolute error (MAE) of the next‑day return predictions.

## Results

The `results/` folder contains a line chart `next_return_plot.png` showing the actual versus predicted next‑day returns over the test set.  Given the randomness in the synthetic data, the model captures only broad trends.

## Project Structure

```
stock-price-forecast/
├── data/      # synthetic stock price and return features (`stock.csv`)
├── results/   # evaluation plot
├── scripts/   # training script
└── README.md  # this overview
```

## Disclaimer

The data and model in this repository are artificially generated and not suitable for trading or investment decisions.  They serve only to demonstrate time‑series regression techniques.