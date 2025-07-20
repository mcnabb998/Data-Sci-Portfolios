import React from 'react';

export default function About() {
  return (
    <main style={{maxWidth:'900px',margin:'2em auto',background:'#f8faff',borderRadius:'1.5em',padding:'2em',boxShadow:'0 2px 16px #4e7cff22'}}>
      <h1 style={{color:'#2a3a6e',fontSize:'2.5em',fontWeight:'800',marginBottom:'0.5em'}}>About Me</h1>
      <p style={{fontSize:'1.2em',color:'#444',marginBottom:'1.5em',fontWeight:'500'}}>Hi, I'm Matthew McNabb. I specialize in turning messy datasets into clear business insights. After years of honing my analytical skills, I've built models that help organizations in healthcare and fintech make data-backed decisions faster.</p>
      <p style={{fontSize:'1.1em',color:'#444',marginBottom:'1em'}}>I enjoy collaborating with multidisciplinary teams and thrive when dissecting complex problems. When I'm not wrangling code, you'll find me sketching user flows or documenting findings so stakeholders can understand exactly what the data is saying.</p>
      <p style={{fontSize:'1.1em',color:'#444',marginBottom:'2em'}}>My goal is to contribute pragmatic, high-impact solutions that streamline operations and uncover new opportunities.</p>
      <div style={{marginTop:'2em'}}>
        <a href="https://www.linkedin.com/in/matthew-mcnabb-a964007a/" target="_blank" rel="noopener noreferrer" style={{color:'#4e7cff',fontWeight:'700',fontSize:'1.08em',textDecoration:'underline'}}>Connect on LinkedIn</a>
        <span style={{margin:'0 1em'}}> | </span>
        <a href="mailto:mcnabb998@gmail.com" style={{color:'#4e7cff',fontWeight:'700',fontSize:'1.08em',textDecoration:'underline'}}>Email Me</a>
      </div>
    </main>
  );
}
