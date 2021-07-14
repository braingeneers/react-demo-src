import React from 'react';
import HeaderHome from './components/HeaderHome';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Tutorial_Intro from './components/Tutorial_Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Research from './components/Research';
import aboutimage from './images/Overview.png';
import aboutimage1 from './images/neuro.jpeg';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderHome/>
      <About image={aboutimage} title='What is WetAI?' button='Details'/>
      <Tutorial_Intro title='Tutorials' button='More Tutorials'/>
      <Research image={aboutimage1} title='Research' button='Learn More'/>
      <Feature/>
      <Contact/>
    </div>
  );
}

export default Home;