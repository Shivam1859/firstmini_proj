import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';

import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
