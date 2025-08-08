# Weather Data Visualisation

This project contains a simple example of loading, exploring and plotting weather data.  A synthetic year‑long time series is generated to demonstrate basic visualisation techniques for meteorological measurements such as temperature and precipitation.

## Data

The dataset lives in `data/weather.csv` and includes 365 daily observations with the following columns:

| Column               | Description                                      |
|----------------------|--------------------------------------------------|
| `date`               | Calendar date                                    |
| `temperature_c`      | Daily average temperature in degrees Celsius      |
| `precip_mm`          | Daily precipitation in millimetres (≥ 0)          |
| `wind_kmh`           | Average wind speed in kilometres per hour          |
| `humidity_percent`   | Relative humidity in percent                      |

The values were generated using sine waves and random noise; they are not based on any specific geographic location.

## Usage

To regenerate the plots from the synthetic weather data:

```bash
# from the repository root
cd projects/weather-data-viz/scripts
python create_plots.py
```

The script reads `../data/weather.csv` and produces two PNG files in the `../results/` folder:

* `temperature_timeseries.png` – line chart of daily temperature across the year.
* `precipitation_timeseries.png` – bar chart of daily precipitation amounts.

You can extend the script to produce additional visualisations (e.g., histograms of wind speed or humidity, monthly aggregates, heatmaps, etc.).

## Results

The `results/` folder contains the generated plots described above.  They provide a quick visual overview of seasonal trends in temperature and rainfall.

## Project Structure

```
weather-data-viz/
├── data/      # synthetic meteorological time series (`weather.csv`)
├── results/   # generated plots
├── scripts/   # plotting script
└── README.md  # this overview
```

## Disclaimer

The weather dataset is artificially generated for demonstration purposes only.  It should not be used for climate analysis or forecasting.