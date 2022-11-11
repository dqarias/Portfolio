import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const Home = () => (
  <section className="home">
    <Hero />
    <About />
    <Portfolio />
  </section>
);

export default Home;
