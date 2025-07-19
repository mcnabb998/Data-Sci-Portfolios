import React from 'react';
import '../portfolio.css';

export default function RealEstateCovidWfh() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Real Estate, COVID & WFH 🏢🏡🦠</h2>
      <p>
        Examines the impact of COVID-19 and remote work on real estate prices and trends. Includes time series analysis and data visualization.
      </p>
      <ul>
        <li><strong>Data:</strong> Real estate sales, COVID data</li>
        <li><strong>Tech:</strong> Python, Pandas, Matplotlib, Seaborn</li>
        <li><strong>Key Results:</strong> Price trend analysis, impact assessment</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/real-estate-covid-wfh" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
