import React from 'react';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import About from './components/About';
import Home from './Home';
import AboutPage from './AboutPage';
import TutorialsPage from './TutorialsPage';
import ContactPage from './ContactPage';
import ResearchPage from './ResearchPage';
import QuickStartPage from './QuickStartPage';
import aboutimage from './images/Overview.png';
import aboutimage1 from './images/neuro.jpeg';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={Home}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/tutorials" component={TutorialsPage}/>
      <Route exact path="/contact" component={ContactPage}/>
      <Route exact path="/quickstart" component={QuickStartPage}/>
      <Route exact path="/research" component={ResearchPage}/>
    </div>
  );
}

export default App;
