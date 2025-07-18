import React from 'react';

const projects = [
  { name: 'Amazon Stars vs Sentiment', path: '../projects/amazon-stars-vs-sentiment/index.md' },
  { name: 'FEMA Flood Insurance Claim Prediction Model', path: '../projects/fema-flood-claims/index.md' },
  { name: 'Real Estate COVID WFH Features', path: '../projects/real-estate-covid-wfh/index.md' },
  { name: 'NYC Taxi Trip Duration Model (in progress)', path: '../projects/nyc-taxi-duration/index.md' },
  { name: 'Movie Review Sentiment Pipeline (in progress)', path: '../projects/movie-review-sentiment/index.md' },
  { name: 'Airbnb Price Predictor (in progress)', path: '../projects/airbnb-price-predictor/index.md' },
  { name: 'Stock Price Trend Forecasting (in progress)', path: '../projects/stock-price-forecast/index.md' },
  { name: 'Traffic Accident Hotspot Detection (in progress)', path: '../projects/traffic-accident-hotspots/index.md' },
  { name: 'Disease Diagnosis from Symptoms (in progress)', path: '../projects/disease-diagnosis-symptoms/index.md' },
  { name: 'Meteorological Data Visualization (in progress)', path: '../projects/weather-data-viz/index.md' },
];

export default function Projects() {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.name} className="project-card">
            <a href={p.path}>{p.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
