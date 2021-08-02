import React from 'react';
import HeaderHome from './components/HeaderHome';
import Feature from './components/Feature';
import TutorialIntro from './components/Tutorial_Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Research from './components/Research';
import aboutimage from './images/Overview.png';
import aboutimage1 from './images/neuro.jpeg';
import People from './components/People';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderHome/>
      <About image={aboutimage} title='What is WetAI?' button='Details'/>
      <People/>
      <TutorialIntro title='Tutorials' button='More Tutorials'/>
      <Research image={aboutimage1} title='Research' button='Learn More'/>
      <Feature/>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default Home;