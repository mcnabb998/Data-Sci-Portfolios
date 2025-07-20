import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './portfolio.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
// ...existing code...

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<><Hero /><Projects /></>} />
        <Route path="/about" element={<div>About page coming soon.</div>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes for individual projects as needed */}
      </Routes>
    </div>
  );
}

export default App;
