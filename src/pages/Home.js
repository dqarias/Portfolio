import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const Home = () => (
  <section className="home">
    <Hero />
    <About />
    <Portfolio />
    <Contact />
  </section>
);

export default Home;
