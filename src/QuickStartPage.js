import React from 'react';
import HeaderQuickStart from './components/HeaderQuickStart';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Tutorial_Intro from './components/Tutorial_Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import aboutimage from './images/Overview.png';
import aboutimage1 from './images/neuro.jpeg';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function QuickStartPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderQuickStart/>
      <About image={aboutimage} title='What is WetAI?' button='Details'/>
      <About image={aboutimage1} title='Research' button='Learn More'/>
      <Tutorial_Intro title='Tutorials' button='More Tutorials'/>
      <Feature/>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default QuickStartPage;