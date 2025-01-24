import './style.css';
import Header from './header.jsx';
import Hero from './hero.jsx';
import About from './about.jsx';
import Education from './edu.jsx';
import Usp from './usp.jsx';
import Experience from './experience.jsx';
import WorkData from './work.jsx';
import Contact from './contact.jsx';
import Skills from './skills.jsx';
// import React from 'react';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Simulate fetching from backend (replace with actual API call)
    const storedCount = localStorage.getItem('visitCount');
    if (storedCount) {
      setVisitCount(parseInt(storedCount));
    } else {
      // Initialize with 0 if no count is stored
      setVisitCount(0);
    }
  }, []);

  useEffect(() => {
    // Update local storage on every count change
    localStorage.setItem('visitCount', visitCount);
  }, [visitCount]);

  // Simulate incrementing on each page load (replace with actual logic)
  useEffect(() => {
    setVisitCount(prevCount => prevCount + 1);
  }, []); 

  const [uniqueVisitCount, setUniqueVisitCount] = useState(0);

  useEffect(() => {
    // Simulate fetching from backend (replace with actual API call)
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (!hasVisitedBefore) {
      // First visit, increment unique count
      setUniqueVisitCount(prevCount => prevCount + 1);
      localStorage.setItem('hasVisited', 'true'); 
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Education />
      <Usp />
      <Experience />
      <WorkData />
      <Contact />
      <div className='visitorcontent'>
        <p>You are visitor number: {visitCount}</p>
        <p>Unique Visitors: {uniqueVisitCount}</p>
      </div>
    </div>
  );
}