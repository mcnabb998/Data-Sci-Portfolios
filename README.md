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

**Highlights**
- 📊 Reproducible notebooks
- 🖼️ Result images and charts
- 🌐 Simple GitHub Pages site

## Table of Contents
- [Projects](#projects)
- [Quickstart](#quickstart)
- [Citation](#citation)

## Projects
- [Amazon Stars vs Sentiment](projects/amazon-stars-vs-sentiment/README.md)
- [FEMA Flood Insurance Claim Prediction Model](projects/fema-flood-claims/README.md)
- [Real Estate COVID WFH Features](projects/real-estate-covid-wfh/README.md)
- [NYC Taxi Trip Duration Model (in progress)](projects/nyc-taxi-duration/README.md)
- [Movie Review Sentiment Pipeline (in progress)](projects/movie-review-sentiment/README.md)
- [Airbnb Price Predictor (in progress)](projects/airbnb-price-predictor/README.md)
- [Stock Price Trend Forecasting (in progress)](projects/stock-price-forecast/README.md)
- [Traffic Accident Hotspot Detection (in progress)](projects/traffic-accident-hotspots/README.md)
- [Disease Diagnosis from Symptoms (in progress)](projects/disease-diagnosis-symptoms/README.md)
- [Meteorological Data Visualization (in progress)](projects/weather-data-viz/README.md)

More projects will be added over time.

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
