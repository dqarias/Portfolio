import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = () => (
  <section className="home">
    <Hero />
    <About />
    <Portfolio />
    <Contact />
  </section>
);

export default Home;
