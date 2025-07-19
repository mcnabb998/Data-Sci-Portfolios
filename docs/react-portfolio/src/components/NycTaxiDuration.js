import React from 'react';
import '../portfolio.css';

export default function NycTaxiDuration() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>NYC Taxi Trip Duration 🚕⏱️</h2>
      <p>
        Predicts taxi trip durations in NYC using regression models and trip data. Explores feature engineering and model evaluation.
      </p>
      <ul>
        <li><strong>Data:</strong> NYC taxi trip records</li>
        <li><strong>Tech:</strong> Python, Pandas, Scikit-learn</li>
        <li><strong>Key Results:</strong> Duration prediction accuracy, feature analysis</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/nyc-taxi-duration" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
