import React from 'react';
import './App.css';
import './portfolio.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
