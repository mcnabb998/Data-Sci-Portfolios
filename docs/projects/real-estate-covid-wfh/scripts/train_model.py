#!/usr/bin/env python
"""Train a random forest regressor on synthetic real estate data."""
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

df = pd.read_csv("../data/listings.csv")
X = df.drop("price", axis=1)
y = df["price"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
model = RandomForestRegressor(random_state=0)
model.fit(X_train, y_train)
preds = model.predict(X_test)
print(f"MAE: {mean_absolute_error(y_test, preds):.0f}")
