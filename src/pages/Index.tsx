
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Impact from '../components/Impact';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Hero />
      <About />
      <Services />
      <Impact />
      <Contact />
    </div>
  );
};

export default Index;
