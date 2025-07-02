
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FarmShowcase from '../components/FarmShowcase';
import About from '../components/About';
import Services from '../components/Services';
import ImageCarousel from '../components/ImageCarousel';
import Impact from '../components/Impact';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <FarmShowcase />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <ImageCarousel />
      </section>
      <section id="impact">
        <Impact />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
