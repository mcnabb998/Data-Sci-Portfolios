#!/usr/bin/env python
"""Create a scatter plot of synthetic accident locations."""
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("../data/accidents.csv")
fig, ax = plt.subplots()
ax.scatter(df["longitude"], df["latitude"], s=5, alpha=0.5)
ax.set_xlabel("Longitude")
ax.set_ylabel("Latitude")
ax.set_title("Accident Locations")
plt.show()
