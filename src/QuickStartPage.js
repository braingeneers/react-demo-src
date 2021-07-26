import React from 'react';
import HeaderQuickStart from './components/HeaderQuickStart';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Tutorial_Intro from './components/Tutorial_Intro';
import PlatformHeader from './components/PlatformHeader';
import Navbar from './components/Navbar';
import About from './components/About';
import Docker from './components/Docker';
import GoogleCloud from './components/GoogleCloud';
import Terra from './components/Terra';
import aboutimage from './images/terra.png';
import aboutimage1 from './images/neuro.jpeg';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function QuickStartPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderQuickStart/>
      <PlatformHeader/>
      <GoogleCloud title='Google Cloud'/>
      <Terra title='Terra' />
      <Docker title='Docker' />
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default QuickStartPage;