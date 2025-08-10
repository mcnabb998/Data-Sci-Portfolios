<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# Weather Data Visualisation 🌦️📊

**Exploring temperature and precipitation patterns across a synthetic year‑long time series.**  This project illustrates how to visualise and interpret daily weather data by plotting temperature and rainfall over time.  By simulating a full year of measurements, we showcase how seasonal cycles and extreme events manifest in simple line charts.

> **Headline:** A simple time‑series plot reveals clear seasonal variation in temperature and rainfall, with synthetic summer highs and winter lows.

---

## 🚦 Project Status

| Component             | State                |
|-----------------------|----------------------|
| White paper (PDF)     | ✅ in repository     |
| 5‑minute presentation | ✅ in repository     |
| Data & notebooks      | ✅ completed         |
| Plotting code         | ✅ completed         |

---

## 🔍 Research Questions

1. **Seasonality** – How do temperature and precipitation vary over the course of a synthetic year?
2. **Visualisation techniques** – What simple plots can communicate weather patterns effectively to non‑technical audiences?
3. **Anomalies** – Can we detect extreme events (e.g., heatwaves, heavy rainfall) in the time series?

## ✨ Key Findings

| Insight | Evidence |
|---|---|
| **Seasonal cycle** | Temperature peaks in mid‑summer and dips in mid‑winter; precipitation shows more variability but follows a similar seasonal rhythm. |
| **Extreme events** | Synthetic heatwaves and heavy rain days stand out as spikes, easily spotted in the line charts. |
| **Data sufficiency** | Even simple daily averages provide enough information to identify seasonal trends. |

## 📁 Repository Layout

```
weather-data-viz/
├── data/                    # Synthetic daily weather data (temperature, precipitation, wind, humidity)
├── scripts/
│   └── create_plots.py      # Read CSV and generate temperature and precipitation plots
├── results/
│   ├── temperature_timeseries.png   # Line plot of daily temperature
│   └── precipitation_timeseries.png # Line plot of daily rainfall
├── README.md                # Project documentation
└── index.md                 # This file
```

## 🏃 Quick Start

```bash
cd projects/weather-data-viz/scripts
python create_plots.py
```

The script reads `../data/weather.csv`, generates line plots for temperature and precipitation and saves them in `../results/`.

## 🧪 Methodology at a Glance

| Stage                  | Approach and Tools |
|------------------------|-------------------|
| **Data generation**    | Use NumPy to simulate one year of daily temperature and precipitation; inject seasonal sine waves and random noise. |
| **Plotting**           | Use Matplotlib to create line charts; set date axis and annotate extreme events. |
| **Interpretation**     | Identify seasonal trends and anomalies; discuss how visualisation aids understanding. |
| **Ethics & bias**      | As synthetic data, there are no privacy concerns; emphasise responsible communication of weather data. |

## 🧭 Ethical Considerations

While this project uses synthetic data, real‑world weather datasets can include geolocation or personally sensitive metadata (e.g., user‑reported observations).  Always anonymise sensitive fields and follow data‑use agreements when working with real sensor networks.

## 📜 Contributing & License

Contributions are welcome!  Please open an issue or pull request.  This project is released under the MIT License.

## 🔗 References

* Wilks, D. (2011). Statistical Methods in the Atmospheric Sciences.
* Matplotlib documentation – Plotting dates and time series.