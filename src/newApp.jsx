import Hero from './components/hero.jsx';
import React from 'react';
import Header from './components/header.jsx';
import AboutMe from './components/about-me.jsx';
import USP from './components/usp.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <USP />
    </>
  );
}