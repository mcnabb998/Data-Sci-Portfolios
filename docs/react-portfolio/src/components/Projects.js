import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { name: 'Amazon Stars vs Sentiment', path: '/projects/amazon-stars-vs-sentiment' },
  { name: 'FEMA Flood Insurance Claim Prediction Model', path: '/projects/fema-flood-claims' },
  { name: 'Real Estate COVID WFH Features', path: '/projects/real-estate-covid-wfh' },
  { name: 'NYC Taxi Trip Duration Model (in progress)', path: '/projects/nyc-taxi-duration' },
  { name: 'Movie Review Sentiment Pipeline (in progress)', path: '/projects/movie-review-sentiment' },
  { name: 'Airbnb Price Predictor (in progress)', path: '/projects/airbnb-price-predictor' },
  { name: 'Stock Price Trend Forecasting (in progress)', path: '/projects/stock-price-forecast' },
  { name: 'Traffic Accident Hotspot Detection (in progress)', path: '/projects/traffic-accident-hotspots' },
  { name: 'Disease Diagnosis from Symptoms (in progress)', path: '/projects/disease-diagnosis-symptoms' },
  { name: 'Meteorological Data Visualization (in progress)', path: '/projects/weather-data-viz' },
];

export default function Projects() {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.name} className="project-card">
            <Link to={p.path}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
