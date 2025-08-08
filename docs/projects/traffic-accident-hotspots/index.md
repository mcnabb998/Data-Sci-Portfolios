<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# Traffic Accident Hotspot Detection 🚦📍

**Identifying high‑risk locations using open accident reports and spatial clustering.** This project processes accident reports from a metropolitan police department to find clusters of incidents and visualizes the most dangerous intersections. We combine kernel density estimation with spatial join techniques to provide actionable insights for planners.

> **Headline:** 8 % of intersections account for **40 %** of accidents; targeted improvements could reduce total incidents by an estimated 12 %.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| 5‑minute video summary | ✅ in repository |
| Code & notebooks | ✅ completed |
| Hotspot maps | ✅ completed |

---

## 🔍 Research Questions

1. **Spatial clustering** – Where are accidents most concentrated, and how can we robustly define hotspots?
2. **Contributing factors** – Do weather, time of day, or road layout correlate with hotspot severity?
3. **Intervention impact** – How many accidents could be prevented by addressing the top hotspots?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Kernel density estimation identifies 50 intersections with highest incident density | `results/kde_map.png` |
| Rainy conditions increase accident rate by 25 % at hotspots | `notebooks/02_WeatherAnalysis.ipynb` |
| Most accidents occur during evening rush (4–7 pm) | `results/time_of_day_hist.png` |
| Simulated interventions at top 10 hotspots reduce projected incidents by ~12 % | `results/intervention_sim.png` |

---

## 🗂️ Repository Layout

```
projects/traffic-accident-hotspots/
├── data/               # raw accident CSVs and shapefiles
├── notebooks/          # EDA, clustering, mapping
├── results/            # hotspot maps and charts
├── report/             # white paper and slides
└── README.md
```

---

## ⚙️ Quick Start

```bash
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/traffic-accident-hotspots

 conda env create -f environment.yml
 conda activate traffic-hotspots

 make all
```

`make all` cleans the accident data, performs spatial clustering, generates interactive maps and summarises the results.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Approach |
|-------|-----------------|
| Ingest | Police accident reports CSV; OpenStreetMap road network |
| Clean | geocode missing coordinates; filter out fender‑benders |
| Cluster | kernel density estimation; DBSCAN clustering |
| Analyze | join clusters with weather and time data |
| Evaluate | accident reduction simulations, hotspot ranking |

---

## 📈 Reproduce Every Figure

```bash
 jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
 jupyter nbconvert --execute --to notebook --inplace notebooks/02_Modeling.ipynb
```

---

## 🛡️ Ethical & Fairness Guard‑Rails

* Accident data anonymised; coordinates offset to protect privacy.
* Recommend infrastructure improvements rather than enforcement.

---

## 🤝 Contributing

Suggestions and pull requests are welcome.

---

## 📜 License

MIT License. Accident data publicly licensed by the city.

---

## 📚 References

- Silverman B. (1986) *Density Estimation for Statistics and Data Analysis.*
- Ester M. et al. (1996) *A Density‑Based Algorithm for Discovering Clusters in Large Spatial Databases.*