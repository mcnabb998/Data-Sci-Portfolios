#!/usr/bin/env python
"""Train a gradient boosting classifier on synthetic symptom data."""
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

df = pd.read_csv("../data/symptoms.csv")
X = df.drop("disease", axis=1)
y = df["disease"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0, stratify=y)
clf = GradientBoostingClassifier(random_state=0)
clf.fit(X_train, y_train)
preds = clf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, preds):.3f}")
print("Confusion matrix:
", confusion_matrix(y_test, preds))
