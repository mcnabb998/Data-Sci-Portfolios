import React from 'react';
import '../portfolio.css';

export default function FemaFloodClaims() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>FEMA Flood Claims Analysis 🌊🏠</h2>
      <p>
        Analyzes FEMA flood insurance claims to uncover trends and risk factors. Includes geospatial analysis and data visualization.
      </p>
      <ul>
        <li><strong>Data:</strong> FEMA flood claims</li>
        <li><strong>Tech:</strong> Python, Pandas, Geopandas, Matplotlib</li>
        <li><strong>Key Results:</strong> Risk factor identification, geospatial maps</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/fema-flood-claims" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
