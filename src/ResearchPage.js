import React from 'react';
import HeaderResearch from './components/HeaderResearch';
import Navbar from './components/Navbar';
import IOT from './components/IOT';
import IOTimage from './images/IOT.png';
import Electroimage from './images/Electro.png';
import Overviewimage from './images/Overview.png';
import Electrophysiology from './components/Electrophysiology';
import OnlineLab from './components/OnlineLab';

function ResearchPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderResearch/>
      
      <IOT image={IOTimage} title='Internet of Things Architecture for High Throughput Biology' button='View Paper'/>
      <Electrophysiology image={Electroimage} title='Light-weight Electrophysiology Hardware and Software Platform for Cloud-Based Neural Recording Experiments' button='View Paper'/>
      <OnlineLab image={Overviewimage} title='WetAI: An online laboratory for neuroscience and artificial intelligence' button='View Paper'/>
      
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default ResearchPage;