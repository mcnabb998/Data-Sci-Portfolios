const projects = [
  {
    id: 'london-underground-upgrades',
    name: 'London Underground Upgrade Impact Analysis',
    path: '/projects/london-underground-upgrades',
    description: 'Causal impact of infrastructure upgrades on LU reliability, ridership, and outcomes (2010–2024)',
    documentation: 'projects/london-underground-upgrades/README.md'
    ,images: [
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
    name: 'Amazon "Stars vs Sentiment"',
    path: '/projects/amazon-stars-vs-sentiment',
    description: 'Analysis of Amazon product reviews: star ratings vs. sentiment scores.'
  },
  {
    id: 'airbnb-price-predictor',
    name: 'Airbnb Price Predictor',
    path: '/projects/airbnb-price-predictor',
    description: 'Predicting Airbnb rental prices using machine learning.'
  },
  {
    id: 'disease-diagnosis-symptoms',
    name: 'Disease Diagnosis from Symptoms',
    path: '/projects/disease-diagnosis-symptoms',
    description: 'Inferring disease likelihood from reported symptoms.'
  },
  {
    id: 'fema-flood-claims',
    name: 'FEMA Flood Claims Analysis',
    path: '/projects/fema-flood-claims',
    description: 'Exploring FEMA flood insurance claims data for trends and insights.'
  },
  {
    id: 'movie-review-sentiment',
    name: 'Movie Review Sentiment',
    path: '/projects/movie-review-sentiment',
    description: 'Sentiment analysis of movie reviews.'
  },
  {
    id: 'nyc-taxi-duration',
    name: 'NYC Taxi Trip Duration',
    path: '/projects/nyc-taxi-duration',
    description: 'Modeling and predicting NYC taxi trip durations.'
  },
  {
    id: 'real-estate-covid-wfh',
    name: 'Real Estate, COVID & WFH',
    path: '/projects/real-estate-covid-wfh',
    description: 'Impact of COVID and work-from-home trends on real estate markets.'
  },
  {
    id: 'stock-price-forecast',
    name: 'Stock Price Forecast',
    path: '/projects/stock-price-forecast',
    description: 'Forecasting stock prices using time series models.'
  },
  {
    id: 'traffic-accident-hotspots',
    name: 'Traffic Accident Hotspots',
    path: '/projects/traffic-accident-hotspots',
    description: 'Identifying and visualizing traffic accident hotspots.'
  },
  {
    id: 'weather-data-viz',
    name: 'Weather Data Visualization',
    path: '/projects/weather-data-viz',
    description: 'Visualizing weather data for patterns and anomalies.'
  },
];

export default projects;
