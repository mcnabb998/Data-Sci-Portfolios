#!/usr/bin/env python
"""Train a gradient boosting model on FEMA synthetic data."""
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import roc_auc_score

# Load data
df = pd.read_csv("../data/claims.csv")
X = df.drop("claim", axis=1)
y = df["claim"]
cat_cols = ["flood_zone", "mitigation_grant"]
num_cols = ["elevation", "year_built", "coverage_amount"]
preprocessor = ColumnTransformer([
    ("cat", OneHotEncoder(drop='first'), cat_cols),
    ("num", 'passthrough', num_cols)
])
model = GradientBoostingClassifier(random_state=0)
pipeline = Pipeline([
    ("preprocess", preprocessor),
    ("model", model)
])
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0, stratify=y)
pipeline.fit(X_train, y_train)
y_prob = pipeline.predict_proba(X_test)[:,1]
print(f"ROC AUC: {roc_auc_score(y_test, y_prob):.3f}")
