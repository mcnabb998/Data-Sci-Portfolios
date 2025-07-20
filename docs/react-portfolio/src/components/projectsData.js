const projects = [
  {
    id: 'london-underground-upgrades',
    name: 'London Underground Upgrade Impact Analysis',
    path: '/projects/london-underground-upgrades',
    description: 'Causal impact of infrastructure upgrades on LU reliability, ridership, and outcomes (2010–2024)',
    documentation: 'projects/london-underground-upgrades/index.md'
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
    description: 'Analysis of Amazon product reviews: star ratings vs. sentiment scores.',
    documentation: 'projects/amazon-stars-vs-sentiment/index.md'
  },
  {
    id: 'airbnb-price-predictor',
    name: 'Airbnb Price Predictor',
    path: '/projects/airbnb-price-predictor',
    description: 'Predicting Airbnb rental prices using machine learning.',
    documentation: 'projects/airbnb-price-predictor/index.md'
  },
  {
    id: 'disease-diagnosis-symptoms',
    name: 'Disease Diagnosis from Symptoms',
    path: '/projects/disease-diagnosis-symptoms',
    description: 'Inferring disease likelihood from reported symptoms.',
    documentation: 'projects/disease-diagnosis-symptoms/index.md'
  },
  {
    id: 'fema-flood-claims',
    name: 'FEMA Flood Claims Analysis',
    path: '/projects/fema-flood-claims',
    description: 'Exploring FEMA flood insurance claims data for trends and insights.',
    documentation: 'projects/fema-flood-claims/index.md'
  },
  {
    id: 'movie-review-sentiment',
    name: 'Movie Review Sentiment',
    path: '/projects/movie-review-sentiment',
    description: 'Sentiment analysis of movie reviews.',
    documentation: 'projects/movie-review-sentiment/index.md'
  },
  {
    id: 'nyc-taxi-duration',
    name: 'NYC Taxi Trip Duration',
    path: '/projects/nyc-taxi-duration',
    description: 'Modeling and predicting NYC taxi trip durations.',
    documentation: 'projects/nyc-taxi-duration/index.md'
  },
  {
    id: 'real-estate-covid-wfh',
    name: 'Real Estate, COVID & WFH',
    path: '/projects/real-estate-covid-wfh',
    description: 'Impact of COVID and work-from-home trends on real estate markets.',
    documentation: 'projects/real-estate-covid-wfh/index.md'
  },
  {
    id: 'stock-price-forecast',
    name: 'Stock Price Forecast',
    path: '/projects/stock-price-forecast',
    description: 'Forecasting stock prices using time series models.',
    documentation: 'projects/stock-price-forecast/index.md'
  },
  {
    id: 'traffic-accident-hotspots',
    name: 'Traffic Accident Hotspots',
    path: '/projects/traffic-accident-hotspots',
    description: 'Identifying and visualizing traffic accident hotspots.',
    documentation: 'projects/traffic-accident-hotspots/index.md'
  },
  {
    id: 'weather-data-viz',
    name: 'Weather Data Visualization',
    path: '/projects/weather-data-viz',
    description: 'Visualizing weather data for patterns and anomalies.',
    documentation: 'projects/weather-data-viz/index.md'
  },
];

export default projects;
