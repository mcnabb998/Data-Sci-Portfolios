import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../portfolio.css';

export default function Contact() {
  return (
    <div className="contact-card" style={{maxWidth: 400, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Contact</h2>
      <p>Feel free to reach out with questions or opportunities!</p>
      <div style={{margin: '1.5rem 0'}}>
        <p>
          <span style={{marginRight: 8}}><FaEnvelope /></span>
          <a href="mailto:mcnabb998@gmail.com">mcnabb998@gmail.com</a>
        </p>
        <p>
          <span style={{marginRight: 8}}><FaLinkedin /></span>
          <a href="https://www.linkedin.com/in/matthew-mcnabb-a964007a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p>
          <span style={{marginRight: 8}}><FaGithub /></span>
          <a href="https://github.com/mcnabb998" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </div>
  );
}
