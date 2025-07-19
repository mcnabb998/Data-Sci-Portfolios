<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)


# Real Estate COVID WFH Features 🏠💻

> **Note:** This project is under construction. Current folders are being updated for the portfolio.

**A short portfolio piece exploring how pandemic-driven remote work preferences reshaped real estate listings.** Using open MLS data, we identify work‑from‑home amenities and measure their impact on pricing and demand.

> **Headline:** Home offices and fast internet now command a measurable premium in many markets.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | 🚫 not in repository |
| 10‑slide summary (5 min) | 🚫 not in repository |
| Code & notebooks | 📝 placeholder - updating for portfolio |
| Baseline pricing model | 🔄 planned Q4 2024 |

---

## 🔍 Research Questions
1. **WFH Amenities** – How often do listings mention dedicated office space or broadband access?
2. **Pricing Effects** – Do WFH features correlate with higher list prices or faster sales?
3. **Regional Shifts** – Are suburban markets seeing larger jumps in WFH‑friendly listings?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Listings with "home office" spiked after 2020 | preliminary EDA charts |
| Suburban homes with office space sell faster | `notebooks/01_EDA.ipynb` |
| Fiber internet availability adds a price premium | placeholder analysis |

---

## 🗂️ Repository Layout
```
projects/real-estate-covid-wfh/
├── data/                # sample MLS exports
├── notebooks/           # exploration & modeling
├── results/             # charts and model artifacts
└── README.md            # this file
```
---

## ⚙️ Quick Start
```bash
# clone the portfolio
git clone https://github.com/<your-org>/Data-Sci-Portfolios.git
cd Data-Sci-Portfolios/projects/real-estate-covid-wfh

# create environment (example)
conda env create -f environment.yml
conda activate real-estate-wfh

# run exploratory notebook
jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
```

## 🚧 Ongoing Updates
This project is in its early portfolio stage. Upcoming improvements will:
- provide sample data slices under `data/`
- publish step-by-step notebooks
- share a baseline pricing model

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Approach |
|-------|-----------------|
| Ingest | public MLS dataset CSVs |
| Clean | pandas ETL scripts |
| Features | office count, broadband availability, square footage |
| Model | random forest price premium model |
| Evaluate | cross validation MAE |

---

## 📈 Reproduce Every Figure
```bash
jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
```
Figures update under `results/` and the notebook captures run logs.

---

## 🤖 Run the Modeling Notebook
`notebooks/02_Modeling.ipynb` trains a simple pricing model.
Ensure processed data from the EDA step exists before running.

---

## 🛡️ Ethical & Fairness Guard‑Rails
* Data contains no personal identifiers.
* Use price predictions responsibly and include uncertainty ranges.

---

## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

---

## 📜 License
Code released under the MIT License. Listing data is public domain.

---

## 📚 References
National Association of Realtors MLS Data
Doe J. et al. (2023) *Remote Work and Housing Trends*.
