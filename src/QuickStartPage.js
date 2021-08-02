import React from 'react';
import HeaderQuickStart from './components/HeaderQuickStart';
import PlatformHeader from './components/PlatformHeader';
import Navbar from './components/Navbar';
import Docker from './components/Docker';
import GoogleCloud from './components/GoogleCloud';
import Terra from './components/Terra';

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