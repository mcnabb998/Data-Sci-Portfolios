import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { name: 'London Underground Upgrade Impact Analysis', path: '/projects/london-underground-upgrades' },
  { 
    name: 'London Underground Upgrade Impact Analysis',
    path: '/projects/london-underground-upgrades',
    description: 'Causal impact of infrastructure upgrades on LU reliability, ridership, and outcomes (2010–2024)' 
  },
  { name: 'Amazon "Stars vs Sentiment"', path: '/projects/amazon-stars-vs-sentiment' },
  { name: 'Airbnb Price Predictor', path: '/projects/airbnb-price-predictor' },
  { name: 'Disease Diagnosis from Symptoms', path: '/projects/disease-diagnosis-symptoms' },
  { name: 'FEMA Flood Claims Analysis', path: '/projects/fema-flood-claims' },
  { name: 'Movie Review Sentiment', path: '/projects/movie-review-sentiment' },
  { name: 'NYC Taxi Trip Duration', path: '/projects/nyc-taxi-duration' },
  { name: 'Real Estate, COVID & WFH', path: '/projects/real-estate-covid-wfh' },
  { name: 'Stock Price Forecast', path: '/projects/stock-price-forecast' },
  { name: 'Traffic Accident Hotspots', path: '/projects/traffic-accident-hotspots' },
  { name: 'Weather Data Visualization', path: '/projects/weather-data-viz' },
];

export default function Projects() {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.name} className="project-card">
            <Link to={p.path}>{p.name}</Link>
            {p.description && (
              <div className="project-desc" style={{ fontSize: '0.95em', color: '#555', marginTop: '0.25em' }}>
                {p.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
