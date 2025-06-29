# Stars vs Sentiment Portfolio

[![GitHub Pages](https://github.com/mcnabb998/Data-Sci-Portfolios/actions/workflows/pages.yml/badge.svg)](https://mcnabb998.github.io/Data-Sci-Portfolios/)
![Python](https://img.shields.io/badge/python-3.10-blue)

A collection of data-science projects examining how star ratings align with text sentiment. Each project highlights methods, visuals, and reproducible code using open datasets.

The `docs/` folder contains a minimal GitHub Pages site that links out to individual portfolio pieces. Project-specific materials live under `projects/`, each with its own README and assets.

## Projects
- [Amazon Stars vs Sentiment](projects/amazon-stars-vs-sentiment/README.md)
- [FEMA Flood Insurance Claim Prediction Model](projects/fema-flood-claims/README.md)
- [Real Estate COVID WFH Features](projects/real-estate-covid-wfh/README.md)

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
