import React from 'react';
import HeaderAbout from './components/HeaderAbout';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import aboutimage from './images/Overview.png';
import aboutimage1 from './images/neuro.jpeg';
import { Route } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderAbout/>
      <About image={aboutimage} title='What is WetAI?' />
      <Contact/>
    </div>
  );
}

export default AboutPage;