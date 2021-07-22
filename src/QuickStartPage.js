import React from 'react';
import HeaderQuickStart from './components/HeaderQuickStart';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Tutorial_Intro from './components/Tutorial_Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Docker from './components/Docker';
import GitHub from './components/GitHub';
import aboutimage from './images/Overview.png';
import aboutimage1 from './images/neuro.jpeg';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function QuickStartPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderQuickStart/>
      <Docker image={aboutimage} title='Docker' button='Details'/>
      <GitHub image={aboutimage1} title='GitHub' button='Learn More'/>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default QuickStartPage;