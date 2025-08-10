# Weather Data Visualisation 🌦️📊

**Exploring seasonal patterns through a synthetic year‑long weather time series.**  This small data‑visualisation project demonstrates how to plot daily temperature and precipitation to reveal cyclical behaviour and extreme events.  By simulating 365 days of measurements, we showcase how simple line charts can communicate complex patterns in climate data.

> **Headline:** Temperature and rainfall plots reveal clear seasonal cycles; synthetic heatwaves and storms stand out as spikes in the time series.

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

1. **Seasonality** – How does temperature and precipitation vary across a synthetic year?  What patterns emerge from daily averages?
2. **Visualisation best practices** – Which chart types (line, area, bar) best convey weather trends to a general audience?
3. **Anomaly detection** – Can we visually flag extreme temperature or rainfall events using annotations or thresholds?

## ✨ Key Findings

| Insight | Evidence |
|---|---|
| **Seasonal temperature cycle** | Daily temperature follows a sinusoidal pattern peaking in mid‑July and bottoming out in late January. |
| **Rainfall variability** | Precipitation exhibits noisier behaviour but still shows seasonality, with wetter spring and autumn months. |
| **Detectable anomalies** | Synthetic heatwaves and heavy‑rain events appear as outlier spikes that can be highlighted with threshold lines. |

## 📁 Repository Layout

```
weather-data-viz/
├── data/
│   └── weather.csv                  # Synthetic daily observations
├── scripts/
│   └── create_plots.py             # Plot temperature and precipitation
├── results/
│   ├── temperature_timeseries.png   # Daily temperature line chart
│   └── precipitation_timeseries.png # Daily rainfall line chart
├── README.md                        # This file
└── index.md                         # Web landing page for GitHub Pages
```

## 🏃 Quick Start

1. Navigate to the project directory:

   ```bash
   cd projects/weather-data-viz/scripts
   ```

2. Run the plotting script:

   ```bash
   python create_plots.py
   ```

   This script reads the synthetic dataset from `../data/weather.csv` and produces two line charts saved in `../results/`.

## 🧪 Methodology at a Glance

| Stage                  | Approach and Tools |
|------------------------|-------------------|
| **Data generation**    | Use NumPy to simulate seasonal temperature and precipitation patterns; superimpose sine waves and random noise. |
| **Visualisation**      | Employ Matplotlib to create line plots with proper date formatting; add annotations for extreme events. |
| **Interpretation**     | Observe seasonal cycles and identify anomalies through visual inspection; discuss the storytelling power of simple charts. |
| **Ethics & bias**      | Note that synthetic data has no privacy concerns; highlight the importance of respecting privacy in real weather datasets. |

## 🧭 Ethical Considerations

Weather data may include geotags or user‑reported observations that can inadvertently reveal private information.  When working with real datasets, always anonymise sensitive metadata and adhere to data use agreements.  This project uses completely synthetic data for demonstration purposes.

## 📜 Contributing & License

Contributions are welcome!  Feel free to open issues or pull requests.  Licensed under the MIT License.

## 🔗 References

* Wilks, D. (2011). *Statistical Methods in the Atmospheric Sciences*.
* Matplotlib documentation — Plotting dates and time series.