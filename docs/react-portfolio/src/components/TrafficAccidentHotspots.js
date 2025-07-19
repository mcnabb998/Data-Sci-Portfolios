import React from 'react';
import '../portfolio.css';

export default function TrafficAccidentHotspots() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Traffic Accident Hotspots 🚦🚑</h2>
      <p>
        Identifies traffic accident hotspots using geospatial analysis and NYC accident data. Visualizes risk areas and trends.
      </p>
      <ul>
        <li><strong>Data:</strong> NYC traffic accident records</li>
        <li><strong>Tech:</strong> Python, Pandas, Geopandas, Folium</li>
        <li><strong>Key Results:</strong> Hotspot maps, risk factor analysis</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/traffic-accident-hotspots" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
