import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projectsData';

export default function Projects() {
  return (
    <>
      <h2 id="projects" style={{marginBottom:'1.5em', fontSize:'2.2em', fontWeight:'700', letterSpacing:'-1px'}}>Projects</h2>
      <div className="projects-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:'2em'}}>
        {projects.map((p, idx) => (
          <div key={p.name} className="project-card fancy-card" style={{background:'#fff', borderRadius:'1.2em', boxShadow:'0 4px 24px rgba(0,0,0,0.10)', padding:'2em 1.5em', transition:'transform 0.2s', position:'relative', overflow:'hidden', border:'1px solid #eaeaea'}}>
            <div style={{display:'flex', alignItems:'center', gap:'0.7em'}}>
              <span style={{fontSize:'2em', color:'#4e7cff'}}>{getProjectIcon(idx)}</span>
              <Link to={`/projects/${p.id}`} style={{fontSize:'1.25em', fontWeight:'600', color:'#222', textDecoration:'none'}}>{p.name}</Link>
            </div>
            <div className="project-description" style={{fontSize:'1em', color:'#555', marginTop:'0.7em', lineHeight:'1.5'}}>{p.description}</div>
            <div className="card-hover" style={{position:'absolute', inset:0, borderRadius:'1.2em', background:'linear-gradient(90deg, #4e7cff22 0%, #00c6ae22 100%)', opacity:0, transition:'opacity 0.2s'}}></div>
          </div>
        ))}
      </div>
      <style>{`
        .fancy-card .card-hover { pointer-events: none; }
        .fancy-card:hover .card-hover { opacity: 1; }
        .fancy-card:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 8px 32px rgba(78,124,255,0.12); }
        .fancy-card .project-description { transition: color 0.2s; }
        .fancy-card:hover .project-description { color: #4e7cff; }
      `}</style>
    </>
  );

  // Simple icon selector for visual variety
  function getProjectIcon(idx) {
    const icons = [
      '🚇', // London Underground
      '⭐', // Amazon
      '🏠', // Airbnb
      '🩺', // Disease Diagnosis
      '🌊', // FEMA Flood
      '🎬', // Movie Review
      '🚕', // NYC Taxi
      '🏢', // Real Estate
      '📈', // Stock Price
      '🚦', // Traffic Accident
      '🌦️', // Weather Data
    ];
    return icons[idx % icons.length];
  }
}
