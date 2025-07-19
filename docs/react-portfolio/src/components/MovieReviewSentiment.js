import React from 'react';
import '../portfolio.css';

export default function MovieReviewSentiment() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Movie Review Sentiment 🎬📝</h2>
      <p>
        Predicts sentiment from movie reviews using NLP and machine learning. Compares different models and visualizes sentiment distributions.
      </p>
      <ul>
        <li><strong>Data:</strong> Movie review text</li>
        <li><strong>Tech:</strong> Python, NLTK, Scikit-learn, Matplotlib</li>
        <li><strong>Key Results:</strong> Sentiment prediction accuracy, model comparison</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/movie-review-sentiment" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
