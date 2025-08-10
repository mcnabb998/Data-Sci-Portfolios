# Airbnb Price Predictor 🏠💵

A complete, replicable workflow to model Airbnb nightly prices in **New York City** and explore fairness across boroughs. This project cleans the Inside Airbnb dataset, engineers meaningful features (such as amenities count, listing age, and host status) and benchmarks multiple regressors including linear models, regularised methods, random forests and XGBoost.  The best model explains roughly **64 %** of the variance in log‑price and highlights the importance of room type, property type and capacity.  We also examine prediction errors across neighbourhoods and discuss ethical considerations around data scraping and potential bias.

> 📣 **Highlights:** Entire homes and private rooms command very different prices; Manhattan listings are the most expensive; tree‑based models outperform linear approaches.

## Project Status

| Component                 | State                                              |
|---------------------------|----------------------------------------------------|
| White paper (PDF)         | [`white_paper.pdf`](results/white_paper.pdf)       |
| White paper (DOCX)        | [`white_paper.docx`](results/white_paper.docx)     |
| Slide deck (PPTX)         | [`slides.pptx`](results/slide_deck.pptx)           |
| Data & notebooks          | Complete                                          |
| Modelling code            | Complete                                          |

## Research Questions

1. **Drivers** – Which listing attributes (room type, location, capacity, amenities, host status) most strongly influence nightly price?
2. **Predictability** – Can we build a model that accurately predicts the log‑transformed price from available features?
3. **Fairness** – Does the model perform uniformly across boroughs or is there evidence of geographic bias?

## Key Findings

| Insight | Evidence |
|--------|---------|
| Room and property type dominate price differences | Feature importance bar chart in `results/fig5_feature_importance.png` |
| Manhattan listings have the highest median prices; the Bronx and Staten Island the lowest | Boxplots in `results/fig3_price_borough.png` |
| Adding capacity and bathrooms increases price but with diminishing returns | Scatter plots in `results/fig4_price_bedrooms.png` |
| Tree‑based models (XGBoost) achieve RMSE ≈ 0.44 and R² ≈ 0.64 on log‑price | Modelling notebook and evaluation table |
| Error rates vary slightly across boroughs; fairness considered acceptable | Table in the white paper |

## Repository Layout

```
.
├── data/                # Raw dataset (listings.csv.gz)
├── notebooks/
│   ├── 01_EDA.ipynb      # Exploration and feature engineering
│   └── 02_Modeling.ipynb # Model training and evaluation
├── results/
│   ├── fig1_log_price_dist.png
│   ├── fig2_price_room_type.png
│   ├── fig3_price_borough.png
│   ├── fig4_price_bedrooms.png
│   ├── fig5_feature_importance.png
│   ├── white_paper.pdf
│   ├── white_paper.docx
│   └── slide_deck.pptx
├── environment.yml      # Conda environment specification
├── README.md            # This file
└── index.md             # Short summary for GitHub Pages
```

## Quick Start

Clone the repository and set up the environment:

```bash
git clone https://github.com/mcnabb998/Data-Sci-Portfolios.git
cd projects/airbnb-price-predictor
conda env create -f environment.yml
conda activate airbnb-predictor
```

To reproduce the figures and model:

1. **Run the EDA notebook** to generate the cleaned data and exploratory plots:

   ```bash
   jupyter nbconvert --execute --inplace notebooks/01_EDA.ipynb
   ```

   All PNGs will refresh under `results/`.

2. **Train the models** and produce the evaluation table:

   ```bash
   jupyter nbconvert --execute --inplace notebooks/02_Modeling.ipynb
   ```

## Methodology at a Glance

| Stage       | Tool / Model                                                        |
|------------|---------------------------------------------------------------------|
| Ingest      | `pandas` loads `listings.csv.gz`, parses dates, converts numeric fields |
| Feature Engineering | Amenities count, host superhost flag, bedrooms/bathrooms as integers, listing age, one‑hot encoding |
| EDA         | `pandas` & `seaborn` for distribution and relationship plots         |
| Modelling   | Linear regression, Ridge, Lasso, Random Forest, XGBoost on log price |
| Evaluation  | 5‑fold cross‑validation, RMSE and R² metrics                          |
| Fairness    | Compare RMSE across boroughs, discuss ethical implications           |

## Reproduce Every Figure

Execute:

```bash
jupyter nbconvert --execute --inplace notebooks/01_EDA.ipynb
```

to regenerate all figures in the `results` folder.  The notebook records runtime logs for transparency.

## Run the Modelling Notebook

The notebook `notebooks/02_Modeling.ipynb` trains the models and selects the best performer.  It expects the cleaned dataset produced during EDA.  Ensure you run `01_EDA.ipynb` first or load the provided `listings.csv.gz` and follow the preprocessing steps described in the notebook.

## Ethical & Fairness Guard‑Rails

* The dataset is scraped from public Airbnb listings; no personally identifiable addresses are included.
* Error rates are compared across boroughs to detect geographic bias; RMSE differences are modest (~0.04).
* Predictions should be interpreted as estimates—not definitive prices.  External factors like seasonality, décor and cleanliness are unobserved.
* Model outputs should not be used to discriminate against hosts or guests.  Provide transparency about uncertainty when communicating results.

## Contributing

Bug reports and pull requests are welcome—see `CONTRIBUTING.md` for guidelines.

## License

* Code — MIT License
* Listing data — Creative Commons Attribution 4.0 (Inside Airbnb)

## References

* Guttentag, D. (2015). *Airbnb: disruptive innovation and the rise of an informal tourism accommodation sector.* Current Issues in Tourism, 18(12), 1192–1217.
* Wang, D., & Nicolau, J. L. (2017). *Price determinants of sharing economy‑based accommodation rental: A study of listings from 33 cities on Airbnb.com.* International Journal of Hospitality Management, 62, 120–131.
* InsideAirbnb. (2025). *Inside Airbnb: adding data to the debate*. Retrieved from http://insideairbnb.com.