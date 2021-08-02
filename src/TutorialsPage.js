import React from 'react';
import HeaderTutorials from './components/HeaderTutorials';
import Navbar from './components/Navbar';
import TutorialIntro2 from './components/Tutorial_Intro2';
import TutorialPython from './components/Tutorial_Python';
import TutorialWidgets from './components/Tutorial_Widgets';
import TutorialGame from './components/Tutorial_Game';


function TutorialsPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderTutorials/>
      <TutorialIntro2 title='WetAI Overview'/>
      <TutorialPython title='Programming in WetAI'/>
      <TutorialWidgets title='Python App Tutorial with Jupyter Widgets'/>
      <TutorialGame title='Building a Game in 15 minutes'/>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
      <div id='contact'></div>
    </div>
  );
}

export default TutorialsPage;