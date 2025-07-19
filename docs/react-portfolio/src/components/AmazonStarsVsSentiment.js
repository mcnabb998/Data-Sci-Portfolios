import React from 'react';
import '../portfolio.css';

export default function AmazonStarsVsSentiment() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Amazon "Stars vs Sentiment" 📦⭐️📝</h2>
      <p>
        This project analyzes the relationship between Amazon product star ratings and the sentiment of written reviews. It explores whether star ratings align with the actual sentiment expressed in review text, using NLP techniques and data visualization.
      </p>
      <ul>
        <li><strong>Data:</strong> Amazon product reviews (stars + text)</li>
        <li><strong>Tech:</strong> Python, Pandas, NLP, Matplotlib, Seaborn</li>
        <li><strong>Key Results:</strong> Visualizations of sentiment vs. star ratings, divergence analysis, insights into review helpfulness</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/amazon-stars-vs-sentiment" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
