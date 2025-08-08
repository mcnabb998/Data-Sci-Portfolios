# Real‑Estate Work‑From‑Home Feature Analysis

This project explores how specific housing characteristics influenced property prices during the work‑from‑home boom.  It uses a **synthetic** dataset that includes square footage, bedroom and bathroom counts, suburban location, home‑office availability and broadband access.  A random‑forest regression model is used to predict sale price and highlight the most influential features.

## Data

The file `data/listings.csv` contains 2,000 synthetic records with the following columns:

| Column         | Description                                        |
|---------------|----------------------------------------------------|
| `sqft`         | Living area in square feet                          |
| `bedrooms`     | Number of bedrooms                                  |
| `bathrooms`    | Number of bathrooms                                 |
| `suburban`     | 1 if the property is located outside a city centre; 0 otherwise |
| `home_office`  | 1 if a dedicated home office exists; 0 otherwise    |
| `broadband`    | 1 if high‑speed internet is available; 0 otherwise  |
| `price`        | Synthetic sale price in USD (target variable)       |

The data were generated via the helper script and do not correspond to real listings.

## Usage

To train the price‑prediction model and evaluate its performance:

```bash
# from the repository root
cd projects/real-estate-covid-wfh/scripts
python train_model.py
```

This script splits the data into training and test sets, trains a `RandomForestRegressor` and prints the mean absolute error (MAE) on the hold‑out set.

## Results

The `results/` folder contains two example plots:

* **`actual_vs_pred.png`** – Scatter plot comparing actual versus predicted prices.  Points on the diagonal line represent perfect predictions.
* **`feature_importance.png`** – Bar chart showing the relative importance of each feature according to the random forest model.  In this synthetic dataset, square footage and bedroom count have the largest impact on price.

## Project Structure

```
real-estate-covid-wfh/
├── data/      # synthetic housing listings (`listings.csv`)
├── results/   # evaluation plots
├── scripts/   # training script
└── README.md  # project overview (this file)
```

## Disclaimer

The data used here are artificial and serve only to demonstrate modelling techniques.  They should not be interpreted as real market statistics.