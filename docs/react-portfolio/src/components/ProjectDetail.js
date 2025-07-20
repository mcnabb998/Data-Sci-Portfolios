import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projectsData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// Removed duplicate imports
// Images are now loaded dynamically from project data

// Modal for image expansion
function ImageModal({ src, alt, onClose }) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  return (
    <div
      className="modal"
      style={{
        position:'fixed',top:0,left:0,width:'100vw',height:'100vh',
        background:'rgba(0,0,0,0.7)',
        backdropFilter:'blur(4px)',
        display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000,
        animation:'modalFadeIn 0.3s cubic-bezier(.4,2,.3,1)'
      }}
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth:'90vw',maxHeight:'90vh',borderRadius:'1em',
          boxShadow:'0 8px 32px #0008',
          border:'6px solid #fff',
          background:'#fff',
          transition:'transform 0.2s cubic-bezier(.4,2,.3,1)',
          animation:'imgPopIn 0.3s cubic-bezier(.4,2,.3,1)'
        }}
      />
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes imgPopIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function ProjectDetail() {
  // Debug output to browser console (only inside useEffect below)
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const [readme, setReadme] = useState('');
  const [readmeError, setReadmeError] = useState(null);
  // Modal state for enlarged image
  const [modalImg, setModalImg] = useState(null);
  // Debug output to browser console
  useEffect(() => {
    console.log('typeof readme:', typeof readme);
    console.log('readme preview:', typeof readme === 'string' ? readme.slice(0,200) : readme);
  }, [readme]);

  useEffect(() => {
    console.log('ProjectDetail useEffect: projectId:', projectId, 'project:', project);
    if (!project || !project.id) {
      setReadmeError('Project or project.id is undefined. Skipping README fetch.');
      setReadme('');
      return;
    }
    // Try to fetch README.md from the project folder
    const readmePath = (process.env.PUBLIC_URL || '') + `/projects/${project.id}/README.md`;
    console.log('README fetch path:', readmePath);
    fetch(readmePath)
      .then(res => {
        console.log('README fetch response:', res.status, res.statusText);
        if (res.ok) return res.text();
        setReadmeError(`README fetch failed: ${res.status} ${res.statusText}`);
        return '';
      })
      .then(text => {
        console.log('README fetched content:', text.slice(0,500));
        setReadme(text);
      })
      .catch(err => {
        setReadmeError(`README fetch error: ${err}`);
        setReadme('');
      });
  }, [projectId, project]);

  if (!project) {
    return <div style={{padding:'2em'}}>
      <h2>Project Not Found</h2>
      <p>Sorry, we couldn't find that project.</p>
      <Link to="/projects">Back to Projects</Link>
    </div>;
  }

  return (
    <div
      style={{
        padding: '2.5em 2em 2em 2em',
        maxWidth: '1800px',
        margin: '2em auto',
        background: 'linear-gradient(120deg, #f5f7fa 60%, #e3e9ff 100%)',
        borderRadius: '2em',
        boxShadow: '0 8px 48px #4e7cff22',
        border: '1px solid #eaeaea',
        position:'relative',
        width: '90vw',
        minWidth: '320px'
      }}
    >
      <h2 style={{fontSize:'2.5em', fontWeight:'800', marginBottom:'0.5em', color:'#2a3a6e', letterSpacing:'-1px'}}>{project.name}</h2>
      <div style={{fontSize:'1.2em', color:'#444', marginBottom:'1.5em', fontWeight:'500'}}>{project.description}</div>
      {/* Debug info for troubleshooting */}
      <div style={{background:'#ffe',color:'#a00',padding:'0.5em',marginBottom:'1em',borderRadius:'0.5em'}}>
        <div><b>Debug:</b></div>
        <div>project.id: {project.id}</div>
        <div>images: {project.images ? project.images.length : 'none'}</div>
        <div>readme length: {readme ? readme.length : 0}</div>
        {readmeError && <div>README error: {readmeError}</div>}
      </div>
      {/* Always render images if present */}
      {project.images && project.images.length > 0 && (
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',
          gap:'2em',
          marginBottom:'2em',
          alignItems:'stretch'
        }}>
          {project.images.map((img, idx) => (
            <div key={idx} style={{
              background:'#fff',
              borderRadius:'1.2em',
              boxShadow:'0 2px 16px #4e7cff22',
              padding:'1em',
              textAlign:'center',
              transition:'box-shadow 0.2s',
              cursor:'pointer',
              position:'relative',
              overflow:'hidden'
            }}>
              <img
                src={(process.env.PUBLIC_URL || '') + img.src}
                alt={img.alt}
                style={{
                  maxWidth:'100%',
                  borderRadius:'1em',
                  boxShadow:'0 4px 24px #4e7cff22',
                  transition:'transform 0.2s cubic-bezier(.4,2,.3,1), box-shadow 0.2s',
                  cursor:'pointer',
                  zIndex:1
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 8px 32px #4e7cff44';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 24px #4e7cff22';
                }}
                onClick={() => setModalImg({src: (process.env.PUBLIC_URL || '') + img.src, alt: img.alt})}
              />
              <div style={{
                fontSize:'1.08em',
                color:'#4e7cff',
                marginTop:'0.7em',
                fontWeight:'600',
                letterSpacing:'0.5px',
                textShadow:'0 1px 8px #4e7cff22'
              }}>{img.caption}</div>
            </div>
          ))}
        </div>
      )}
      {/* Image Modal for enlargement */}
      {modalImg && (
        <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={() => setModalImg(null)} />
      )}
      <div style={{background:'linear-gradient(120deg, #f8faff 80%, #e3e9ff 100%)', borderRadius:'1.2em', boxShadow:'0 2px 16px #4e7cff22', padding:'2em', marginBottom:'2em', border:'1px solid #eaeaea'}}>
        <h3 style={{color:'#2a3a6e', fontWeight:'700', fontSize:'1.2em', marginBottom:'0.7em'}}>Project Documentation</h3>
        <div style={{fontSize:'1.08em', color:'#444'}}>
          {/* Debug output for readme type and value */}
          <pre style={{background:'#eef',color:'#333',padding:'0.5em',borderRadius:'0.5em',marginBottom:'1em'}}>
            {`typeof readme: ${typeof readme}\nreadme preview: ${typeof readme === 'string' ? readme.slice(0,200) : JSON.stringify(readme)}\nreadmeError: ${readmeError}`}
          </pre>
          {readmeError && (
            <div style={{color:'#a00',fontWeight:'bold',marginBottom:'1em'}}>README fetch error: {readmeError}</div>
          )}
          {readme && typeof readme === 'string' && readme.trim().length > 0 ? (
            <div className="markdown-body" style={{overflowX:'auto'}}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  table: ({node, ...props}) => (
                    <table style={{width:'100%',margin:'1.5em 0',borderCollapse:'collapse',fontSize:'1.08em',background:'#fff',boxShadow:'0 1px 8px #0001',borderRadius:'0.5em',overflow:'hidden'}} {...props} />
                  ),
                  th: ({node, ...props}) => (
                    <th style={{padding:'0.8em',background:'#f5f7fa',border:'1px solid #eaeaea',fontWeight:'700',color:'#2a3a6e',fontSize:'1.08em'}} {...props} />
                  ),
                  td: ({node, ...props}) => (
                    <td style={{padding:'0.8em',border:'1px solid #eaeaea',fontSize:'1.08em',background:'#fff'}} {...props} />
                  )
                }}
              >{readme}</ReactMarkdown>
            </div>
          ) : (
            <div style={{color:'#a00',fontWeight:'bold'}}>Project documentation is not yet available or could not be loaded.</div>
          )}
          {project.documentation && (
            <div style={{marginTop:'1.5em'}}>
              <a href={project.documentation.startsWith('http') ? project.documentation : 'https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/' + project.id}
                 target="_blank" rel="noopener noreferrer"
                 style={{color:'#4e7cff', fontWeight:'700', fontSize:'1.08em', textDecoration:'underline'}}>
                View Documentation & Data on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
      <Link to="/projects" style={{marginTop:'2em', display:'inline-block', color:'#4e7cff', fontWeight:'700', fontSize:'1.1em'}}>← Back to Projects</Link>
      <style>{`
        .markdown-body {
          font-size: 1.08em;
          color: #222;
          line-height: 1.7;
          word-break: break-word;
        }
        .markdown-body h1, .markdown-body h2, .markdown-body h3 {
          font-weight: 700;
          color: #2a3a6e;
          margin-top: 1.5em;
          margin-bottom: 0.7em;
        }
        .markdown-body h1 { font-size: 2em; }
        .markdown-body h2 { font-size: 1.5em; }
        .markdown-body h3 { font-size: 1.2em; }
        .markdown-body ul, .markdown-body ol {
          margin-left: 2em;
          margin-bottom: 1em;
        }
        .markdown-body table {
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 1.5em;
        }
        .markdown-body th, .markdown-body td {
          border: 1px solid #eaeaea;
          padding: 0.5em 0.8em;
        }
        .markdown-body th {
          background: #f5f7fa;
          font-weight: 700;
        }
        .markdown-body pre, .markdown-body code {
          background: #eef;
          border-radius: 0.3em;
          padding: 0.2em 0.4em;
          font-size: 0.98em;
        }
        .markdown-body blockquote {
          border-left: 4px solid #4e7cff;
          background: #f5f7fa;
          margin: 1em 0;
          padding: 0.7em 1em;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default ProjectDetail;
