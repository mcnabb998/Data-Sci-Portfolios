# Amazon Stars vs Sentiment

## Problem Statement
Amazon reviews contain both star ratings and text. This project investigates how closely the written sentiment matches the given stars across a sample dataset. We explore sentiment drift, polarity, and rating distributions to see whether textual tone correlates with numerical feedback.

## Key Methods
- NLP preprocessing in Python
- Sentiment scoring with open-source tools
- Visualization of rating vs sentiment divergence
- Statistical analysis of outliers

## Main Findings
- Extreme 1 and 5 star reviews show the strongest sentiment polarity
- Mid-range stars often hide more positive or negative text than expected
- Combining star counts with sentiment reveals interesting product trends

## Run it Locally
```bash
conda env create -f environment.yml
make all
```

![Divergence Histogram](results/divergence_hist.png)
