import React from 'react';
import HeaderTutorials from './components/HeaderTutorials';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Tutorial_Intro2 from './components/Tutorial_Intro2';
import Tutorial_Python from './components/Tutorial_Python';
import Tutorial_Widgets from './components/Tutorial_Widgets';
import Tutorial_Game from './components/Tutorial_Game';
import About from './components/About';
import aboutimage from './images/Overview.png';
import aboutimage1 from './images/neuro.jpeg';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function TutorialsPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderTutorials/>
      <Tutorial_Intro2 title='WetAI Overview'/>
      <Tutorial_Python title='Programming in WetAI'/>
      <Tutorial_Widgets title='Python App Tutorial with Jupyter Widgets'/>
      <Tutorial_Game title='Building a Game in 15 minutes'/>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default TutorialsPage;