import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projectsData';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => {
    const lastSegment = p.path.split('/').pop();
    return lastSegment === projectId;
  });

  if (!project) {
    return <div style={{padding:'2em'}}>
      <h2>Project Not Found</h2>
      <p>Sorry, we couldn't find that project.</p>
      <Link to="/projects">Back to Projects</Link>
    </div>;
  }

  return (
    <div style={{padding:'2em', maxWidth:'700px', margin:'0 auto'}}>
      <h2 style={{fontSize:'2em', fontWeight:'700'}}>{project.name}</h2>
      <div style={{fontSize:'1.1em', color:'#555', margin:'1em 0'}}>{project.description}</div>
      {project.documentation && (
        <p><a href={project.documentation} target="_blank" rel="noopener noreferrer">Project Documentation</a></p>
      )}
      <Link to="/projects" style={{marginTop:'2em', display:'inline-block', color:'#4e7cff'}}>← Back to Projects</Link>
    </div>
  );
}
