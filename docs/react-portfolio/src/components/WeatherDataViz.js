import React from 'react';
import '../portfolio.css';

export default function WeatherDataViz() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Weather Data Visualization 🌦️📊</h2>
      <p>
        Visualizes weather data trends and patterns using interactive charts and maps. Includes time series and geospatial analysis.
      </p>
      <ul>
        <li><strong>Data:</strong> Weather station records</li>
        <li><strong>Tech:</strong> Python, Pandas, Matplotlib, Plotly</li>
        <li><strong>Key Results:</strong> Weather trend visualizations, interactive maps</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/weather-data-viz" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
