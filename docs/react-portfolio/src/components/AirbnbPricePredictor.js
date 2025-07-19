import React from 'react';
import '../portfolio.css';

export default function AirbnbPricePredictor() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Airbnb Price Predictor 🏠💸</h2>
      <p>
        Predicts Airbnb rental prices using machine learning models and NYC listing data. Explores feature engineering, regression, and model evaluation.
      </p>
      <ul>
        <li><strong>Data:</strong> NYC Airbnb listings</li>
        <li><strong>Tech:</strong> Python, Pandas, Scikit-learn, XGBoost</li>
        <li><strong>Key Results:</strong> Price prediction accuracy, feature importance analysis</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/airbnb-price-predictor" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
