# NBA Shot Efficiency

## Problem Statement
Using publicly available play-by-play data, this project analyzes shot selection and scoring efficiency across NBA teams. We seek to quantify which players and zones on the court yield the best return while accounting for defensive pressure.

## Key Methods
- Scraping and cleaning game logs
- Spatial shot charts with Python
- Efficiency metrics per player and zone
- Visualization of trends over a season

## Main Findings
- High-percentage zones cluster around the rim and corner threes
- Some players thrive from mid-range despite league trends
- Team strategies differ dramatically in shot distribution

## Run it Locally
```bash
conda env create -f environment.yml
make all
```

![Efficiency Map](results/shot_map.png)
