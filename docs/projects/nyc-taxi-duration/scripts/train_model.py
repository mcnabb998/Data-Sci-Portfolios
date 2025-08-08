#!/usr/bin/env python
"""Train a gradient boosting regressor on synthetic taxi data."""
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error

df = pd.read_csv("../data/taxi_trips.csv")
X = df.drop("duration_min", axis=1)
y = df["duration_min"]
ct = ColumnTransformer([
    ("cat", OneHotEncoder(drop='first'), ["pickup_borough", "dropoff_borough"]),
    ("num", 'passthrough', ["distance_km", "hour", "passenger_count"])
])
model = GradientBoostingRegressor(random_state=0)
pipeline = Pipeline([
    ("preprocess", ct),
    ("model", model)
])
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
pipeline.fit(X_train, y_train)
preds = pipeline.predict(X_test)
print(f"MAE: {mean_absolute_error(y_test, preds):.2f} minutes")
