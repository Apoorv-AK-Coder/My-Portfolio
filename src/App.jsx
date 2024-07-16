import './style.css';
import Hero from './hero.jsx';
import Skills from './skills.jsx';
import Header from './header.jsx';
import Education from './edu.jsx';
import Experience from './experience.jsx';
import Contact from './contact.jsx';
import WorkData from './work.jsx';
import React from 'react';

export default function App() {
  

  return (
    <div className="container">
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <WorkData />
      <Contact />
    </div>
  );
}