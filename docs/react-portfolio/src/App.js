import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './portfolio.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<><Hero /><Projects /></>} />
          <Route path="/about" element={<div>About page coming soon.</div>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<div>Contact page coming soon.</div>} />
          {/* Add more routes for individual projects as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
