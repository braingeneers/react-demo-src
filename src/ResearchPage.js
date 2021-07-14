import React from 'react';
import HeaderResearch from './components/HeaderResearch';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Tutorial_Intro from './components/Tutorial_Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import IOT from './components/IOT';
import aboutimage from './images/Overview.png';
import IOTimage from './images/IOT.png';
import Davidimage from './images/DavidH.png';
import Antonimage from './images/Anton.png';
import Electroimage from './images/Electro.png';
import aboutimage1 from './images/neuro.jpeg';
import Overviewimage from './images/Overview.png';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Electrophysiology from './components/Electrophysiology';
import OnlineLab from './components/OnlineLab';
import DavidH from './components/DavidH';
import Anton from './components/Anton';
import People from './components/People';

function ResearchPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderResearch/>
      <People/>
      <IOT image={IOTimage} title='Internet of Things Architecture for High Throughput Biology' button='View Paper'/>
      <Electrophysiology image={Electroimage} title='Light-weight Electrophysiology Hardware and Software Platform for Cloud-Based Neural Recording Experiments' button='View Paper'/>
      <OnlineLab image={Overviewimage} title='WetAI: An online laboratory for neuroscience and artificial intelligence' button='View Paper'/>
      <Feature/>
      <Contact/>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default ResearchPage;