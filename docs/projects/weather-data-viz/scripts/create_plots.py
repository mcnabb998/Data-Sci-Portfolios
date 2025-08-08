#!/usr/bin/env python
"""Create basic plots from synthetic weather data."""
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("../data/weather.csv", parse_dates=['date'])
# Temperature plot
plt.figure(figsize=(8,4))
plt.plot(df['date'], df['temperature_c'])
plt.title('Daily Temperature Over One Year')
plt.xlabel('Date')
plt.ylabel('Temperature (°C)')
plt.tight_layout()
plt.savefig('../results/temperature_timeseries.png')
plt.close()
# Precipitation plot
plt.figure(figsize=(8,4))
plt.bar(df['date'], df['precip_mm'], color='royalblue')
plt.title('Daily Precipitation Over One Year')
plt.xlabel('Date')
plt.ylabel('Precipitation (mm)')
plt.tight_layout()
plt.savefig('../results/precipitation_timeseries.png')
plt.close()
print('Plots saved to results folder.')
