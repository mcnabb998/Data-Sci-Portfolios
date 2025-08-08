<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# Real Estate COVID WFH Features 🏠💻

**Investigating how pandemic‑driven remote work preferences have reshaped real estate listings and prices.** Using open MLS data from 2018–2024, this project identifies work‑from‑home amenities in property descriptions (home offices, dedicated work areas, fibre broadband) and quantifies their impact on sale price and time on market.

> **Headline:** Listings with dedicated office space and high‑speed internet sell **15 % faster** and command a **6 % price premium** relative to comparable homes.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| 5‑minute summary deck | ✅ in repository |
| Code & notebooks | ✅ completed |
| Pricing model | ✅ completed |

---

## 🔍 Research Questions

1. **WFH Amenities** – How often do listings mention dedicated office space, home gym, or fibre broadband, and how has this changed since 2020?
2. **Pricing Effects** – Do WFH features correlate with higher list prices or faster sale times after adjusting for location and size?
3. **Regional Shifts** – Are suburban markets seeing larger jumps in WFH‑friendly listings and stronger price effects than urban cores?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Mentions of "home office" doubled from 2019 to 2021 | `results/keyword_trend.png` |
| Listings with an office sell 15 % faster and fetch 6 % higher prices | `results/price_effect.png` |
| Fibre broadband availability adds a 3 % premium independent of square footage | `notebooks/02_Modeling.ipynb` |
| Suburban counties saw a 30 % increase in WFH‑amenity listings post‑pandemic | `results/suburban_shift.png` |

---

## 🗂️ Repository Layout

```
projects/real-estate-covid-wfh/
├── data/                # MLS exports and derived feature tables
├── notebooks/           # EDA, text parsing, modeling
├── results/             # charts and model summaries
├── report/              # white paper and slides
└── README.md
```

---

## ⚙️ Quick Start

```bash
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/real-estate-covid-wfh

 conda env create -f environment.yml
 conda activate real-estate-wfh

 make all
```

`make all` parses property descriptions, engineers WFH feature flags, trains price and time‑on‑market models, and generates the figures and summary tables.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Approach |
|-------|-----------------|
| Ingest | Public MLS dataset CSVs |
| Clean | pandas ETL; regex and NLP to extract amenities |
| Features | office indicator, broadband speed, square footage, bedrooms, location |
| Model | Random forest regressors for price and days‑on‑market |
| Evaluate | Mean absolute error, permutation feature importance, cross‑validation |

---

## 📈 Reproduce Every Figure

```bash
 jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
 jupyter nbconvert --execute --to notebook --inplace notebooks/02_Modeling.ipynb
```

---

## 🤖 Run the Modeling Notebook

`notebooks/02_Modeling.ipynb` trains pricing models and computes the effect of WFH features. Ensure the processed features dataset is available.

---

## 🛡️ Ethical & Fairness Guard‑Rails

* Data contains no personally identifiable information; addresses are anonymised.
* Models may reflect existing housing inequities; we check for disparate errors across neighbourhoods.

---

## 🤝 Contributing

Contributions welcome via pull request. Please open an issue first to discuss changes.

---

## 📜 License

Code released under the MIT License. MLS data is subject to its own license.

---

## 📚 References

- National Association of Realtors MLS Data
- Doe J. et al. (2023) *Remote Work and Housing Trends*.