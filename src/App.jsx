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
import React from 'react';

export default function App() {
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
    </div>
  );
}