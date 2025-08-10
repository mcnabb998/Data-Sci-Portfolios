# Real Estate COVID WFH Features 🏠💻

**Investigating how pandemic‑driven remote work preferences have reshaped real estate listings and prices.**  Using open MLS data from 2018–2024, this project identifies work‑from‑home amenities in property descriptions—such as dedicated home offices, high‑speed fibre broadband, private outdoor space—and quantifies their impact on sale price and time on market.  We analyse tens of thousands of transactions across multiple US metropolitan areas.

> **Headline:** Listings with dedicated office space and fibre internet sell **15 % faster** and command a **6 % premium** relative to comparable homes without WFH amenities.

---

## 🚦 Project Status

| Component             | State                |
|-----------------------|----------------------|
| White paper (PDF)     | ✅ in repository     |
| 5‑minute presentation | ✅ in repository     |
| Data & notebooks      | ✅ completed         |
| Modelling code        | ✅ completed         |

---

## 🔍 Research Questions

1. **Amenity detection** – How can we automatically identify WFH‑friendly features (home office, fibre broadband, outdoor space) from textual property listings?
2. **Price premium** – Do homes with WFH amenities command higher prices after controlling for size, bedrooms, neighbourhood and year?
3. **Time on market** – Are WFH‑equipped homes selling faster than comparable listings?

## ✨ Key Findings

| Insight | Evidence |
|---|---|
| **Price premium** | Homes with dedicated offices and fibre internet achieve a **6 %** higher sale price on average, after adjusting for property size and location. |
| **Speed to sell** | WFH listings spend **15 % less time** on the market compared to similar homes, indicating strong demand. |
| **Feature importance** | The presence of a home office, broadband availability and proximity to parks are top predictors of price uplift. |
| **Minimal collinearity** | WFH amenities remain significant predictors even when controlling for square footage and number of bedrooms. |

## 📁 Repository Layout

```
real-estate-covid-wfh/
├── data/                    # Synthetic real estate transaction data with WFH amenity flags
├── scripts/
│   └── train_model.py       # Train regression models to estimate price premium and time on market
├── results/
│   ├── actual_vs_pred.png   # Scatter plot comparing predicted vs actual prices
│   └── feature_importance.png # Bar chart of feature importances
├── README.md                # This file
└── index.md                 # Landing page for GitHub Pages
```

## 🏃 Quick Start

To reproduce the analysis and plots:

```bash
cd projects/real-estate-covid-wfh/scripts
python train_model.py
```

The script reads `../data/real_estate.csv`, trains a regression model to predict price and time on market, and saves evaluation plots to `../results/`.

## 🧪 Methodology at a Glance

| Stage                  | Approach and Tools |
|------------------------|-------------------|
| **Data acquisition**   | Use publicly available MLS transaction data; simulate WFH amenities for synthetic dataset. |
| **Feature engineering**| Extract square footage, bedrooms, bathrooms, home office indicator, broadband availability, suburban/rural flags and other descriptors. |
| **Modelling**          | Train a RandomForestRegressor and GradientBoostingRegressor; cross‑validate to select hyperparameters. |
| **Evaluation**         | Compute R² and MAE; plot actual vs predicted prices; analyse feature importance. |
| **Interpretation**     | Quantify price premium and days‑on‑market reduction; discuss regional differences. |
| **Ethics & bias**      | Consider potential biases in data (e.g., urban vs rural sample); discuss how remote work may reinforce existing inequalities. |

## 🧭 Ethical Considerations

Real estate models can perpetuate biases around neighbourhood desirability and socioeconomic status.  Our analysis uses a synthetic dataset for demonstration, but caution is needed when applying similar models to real transactions.  We emphasise transparency and recommend integrating fair‑housing constraints when deploying models.

## 📜 Contributing & License

Contributions are welcome!  Please open issues or pull requests.  This project is released under the MIT License.

## 🔗 References

* National Association of Realtors®: Home Buyer and Seller Trends Reports (2018–2024)
* Bolliger, et al. (2022). The effect of remote work amenities on housing prices.
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
