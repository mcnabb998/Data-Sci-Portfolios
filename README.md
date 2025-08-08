<link rel="stylesheet" href="readme.css">
<div class="readme-hero" align="center">
  <h1>Stars vs Sentiment Portfolio</h1>
  <p>
    <a href="https://mcnabb998.github.io/Data-Sci-Portfolios/">
      <img class="badge" alt="GitHub Pages" src="https://github.com/mcnabb998/Data-Sci-Portfolios/actions/workflows/pages.yml/badge.svg">
    </a>
    <img class="badge" alt="Python" src="https://img.shields.io/badge/python-3.10-blue">
  </p>
  <p class="tagline">Explore how star ratings compare with written sentiment using open datasets.</p>
  <img class="chart" src="projects/amazon-stars-vs-sentiment/results/divergence_hist.png" alt="Sample chart showing sentiment divergence">
</div>

A collection of mini-projects showcasing reproducible analyses of review data. Each folder under `projects/` contains notebooks, a `Makefile`, and result images.

The [`docs/`](docs/) directory powers a simple GitHub Pages site that links out to individual portfolio pieces.

New in **Milestone 2**: dedicated [About](docs/about.md) and [Contact](docs/contact.html) pages plus a refreshed landing page.

**Highlights**
- 📊 Reproducible notebooks
- 🖼️ Result images and charts
- 🌐 Simple GitHub Pages site

## Table of Contents
- [Projects](#projects)
- [Quickstart](#quickstart)
- [Citation](#citation)


## Projects
- [London Underground Upgrade Impact Analysis](projects/london-underground-upgrades/README.md) – Causal impact of infrastructure upgrades on LU reliability, ridership, and outcomes (2010–2024)
 - [Amazon “Stars vs Sentiment” Review Analysis](projects/amazon-stars-vs-sentiment/README.md) – Measuring divergence between star ratings and textual sentiment using one million reviews
 - [FEMA Flood Insurance Claim Prediction](projects/fema-flood-claims/README.md) – Predicting claim probability from flood zone, elevation and construction data
 - [Real Estate COVID WFH Features](projects/real-estate-covid-wfh/README.md) – Quantifying price and speed effects of remote‑work amenities in real estate listings
 - [NYC Taxi Trip Duration Prediction](projects/nyc-taxi-duration/README.md) – Modeling taxi trip times with engineered spatial and temporal features
 - [Movie Review Sentiment Classification](projects/movie-review-sentiment/README.md) – Building and comparing NLP pipelines for classifying movie review sentiment
 - [Airbnb Price Predictor](projects/airbnb-price-predictor/README.md) – Explaining nightly price variation for New York City Airbnb listings
 - [Stock Price Trend Forecasting](projects/stock-price-forecast/README.md) – Comparing ARIMA, Prophet and LSTM models for short‑term stock forecasts
 - [Traffic Accident Hotspot Detection](projects/traffic-accident-hotspots/README.md) – Identifying high‑risk intersections using clustering and mapping
 - [Disease Diagnosis from Symptoms](projects/disease-diagnosis-symptoms/README.md) – Demonstrating symptom encoding and classification for multi‑label diagnosis

<!-- All projects above are complete portfolio pieces. -->

## Quickstart

```bash
cd projects/amazon-stars-vs-sentiment
conda env create -f environment.yml
conda activate stars-sentiment
make all
```

For details of each step, see the [notebooks directory](projects/amazon-stars-vs-sentiment/notebooks/).

## Citation

If you use these materials, please cite the repository using the
[CITATION.cff](CITATION.cff) file.
