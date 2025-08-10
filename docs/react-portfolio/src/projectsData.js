// Sample projectsData.js for your portfolio
const projects = [
  {
    id: 'london-underground-upgrades',
    name: 'London Underground Upgrade Impact Analysis',
    description: 'Causal impact of infrastructure upgrades on LU reliability, ridership, and outcomes (2010–2024).',
    // Point documentation to the local Markdown served from the built site
    documentation: 'projects/london-underground-upgrades/index.md',
    images: [
      {
        src: 'assets/london/ejt_heatmap.png',
        alt: 'LU Event Journey Time Heatmap',
        caption: 'Event Journey Time Heatmap: Impact of upgrades across the network.'
      },
      {
        src: 'assets/london/ejt_trend_by_line.png',
        alt: 'LU Event Journey Time Trend by Line',
        caption: 'Event Journey Time Trend by Line: Reliability improvements over time.'
      },
      {
        src: 'assets/london/lch_stacked_area.png',
        alt: 'LU Lost Customer Hours Stacked Area',
        caption: 'Lost Customer Hours: Stacked area chart showing reduction in delays.'
      }
    ]
  },
  {
    id: 'amazon-stars-vs-sentiment',
    name: 'Amazon Stars vs Sentiment',
    description: 'Analyzing divergence between star ratings and textual sentiment in Amazon product reviews.',
    documentation: 'projects/amazon-stars-vs-sentiment/index.md',
    images: [
      {
        src: 'assets/amazon-stars-vs-sentiment/divergence_hist.png',
        alt: 'Sentiment divergence histogram',
        caption: 'Sentiment divergence histogram'
      }
    ]
  },
  {
    id: 'fema-flood-claims',
    name: 'FEMA Flood Insurance Claim Prediction',
    description: 'Predicting the likelihood of a flood insurance claim using engineered property features.',
    documentation: 'projects/fema-flood-claims/index.md',
    images: [
      {
        src: 'assets/fema-flood-claims/roc_curve.png',
        alt: 'ROC curve',
        caption: 'ROC curve'
      }
    ]
  },
  {
    id: 'real-estate-covid-wfh',
    name: 'Real Estate WFH Feature Analysis',
    description: 'Exploring how home-office and broadband availability affect housing prices in a synthetic market.',
    documentation: 'projects/real-estate-covid-wfh/index.md',
    images: [
      {
        src: 'assets/real-estate-covid-wfh/actual_vs_pred.png',
        alt: 'Actual vs predicted prices',
        caption: 'Actual vs predicted prices'
      }
    ]
  },
  {
    id: 'nyc-taxi-duration',
    name: 'NYC Taxi Trip Duration Model',
    description: 'Modelling taxi trip durations from distance, boroughs and time of day using synthetic TLC data.',
    documentation: 'projects/nyc-taxi-duration/index.md',
    images: [
      {
        src: 'assets/nyc-taxi-duration/actual_vs_pred.png',
        alt: 'Actual vs predicted durations',
        caption: 'Actual vs predicted durations'
      }
    ]
  },
  {
    id: 'movie-review-sentiment',
    name: 'Movie Review Sentiment Classification',
    description: 'Classifying synthetic movie reviews into positive and negative sentiment using simple features.',
    documentation: 'projects/movie-review-sentiment/index.md',
    images: [
      {
        src: 'assets/movie-review-sentiment/confusion_matrix.png',
        alt: 'Confusion matrix',
        caption: 'Confusion matrix'
      }
    ]
  },
  {
    id: 'airbnb-price-predictor',
    name: 'Airbnb Price Predictor',
    description: 'Estimating nightly listing prices from sample Airbnb features with gradient boosting.',
    documentation: 'projects/airbnb-price-predictor/index.md',
    images: [
      {
        src: 'assets/airbnb-price-predictor/actual_vs_pred.png',
        alt: 'Actual vs predicted Airbnb prices',
        caption: 'Actual vs predicted Airbnb prices'
      }
    ]
  },
  {
    id: 'stock-price-forecast',
    name: 'Stock Price Return Forecast',
    description: 'Forecasting next-day stock returns from lagged synthetic return features.',
    documentation: 'projects/stock-price-forecast/index.md',
    images: [
      {
        src: 'assets/stock-price-forecast/return_forecast.png',
        alt: 'Return forecast plot',
        caption: 'Return forecast plot'
      }
    ]
  },
  {
    id: 'traffic-accident-hotspots',
    name: 'Traffic Accident Hotspot Detection',
    description: 'Visualising clusters of accidents in synthetic geospatial data.',
    documentation: 'projects/traffic-accident-hotspots/index.md',
    images: [
      {
        src: 'assets/traffic-accident-hotspots/hotspots.png',
        alt: 'Accident hotspots plot',
        caption: 'Accident hotspots'
      }
    ]
  },
  {
    id: 'disease-diagnosis-symptoms',
    name: 'Disease Diagnosis from Symptoms',
    description: 'Using gradient boosting to classify diseases from synthetic symptom measurements.',
    documentation: 'projects/disease-diagnosis-symptoms/index.md',
    images: [
      {
        src: 'assets/disease-diagnosis-symptoms/confusion_matrix.png',
        alt: 'Disease confusion matrix',
        caption: 'Disease confusion matrix'
      }
    ]
  },
  {
    id: 'weather-data-viz',
    name: 'Weather Data Visualisation',
    description: 'Plotting synthetic temperature and precipitation for a year-long time series.',
    documentation: 'projects/weather-data-viz/index.md',
    images: [
      {
        src: 'assets/weather-data-viz/temperature_timeseries.png',
        alt: 'Temperature time series',
        caption: 'Temperature time series'
      }
    ]
  }
];

export default projects;
