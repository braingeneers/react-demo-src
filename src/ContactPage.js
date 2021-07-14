import React from 'react';
import HeaderContact from './components/HeaderContact';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderContact/>
      <Contact/>
    </div>
  );
}

export default ContactPage;