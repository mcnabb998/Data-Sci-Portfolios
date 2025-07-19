import React from 'react';
import '../portfolio.css';

export default function DiseaseDiagnosisSymptoms() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Disease Diagnosis from Symptoms 🩺🔬</h2>
      <p>
        Uses machine learning to predict diseases based on patient symptoms. Focuses on classification, feature selection, and model interpretability.
      </p>
      <ul>
        <li><strong>Data:</strong> Patient symptom records</li>
        <li><strong>Tech:</strong> Python, Scikit-learn, Pandas</li>
        <li><strong>Key Results:</strong> Classification accuracy, interpretable models</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/disease-diagnosis-symptoms" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
