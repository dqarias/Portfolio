import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Hero = () => (
  <section className="hero">
    <h2 className="hero__title-1">Hi, my name is</h2>
    <h2 className="hero__title-2">Dino Quispe</h2>
    <div className="hero__title-3">
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Montserrat',
          color: '#f0d2d2',
          fontWeight: 700,
          fontSize: '6rem',
        }}
        startDelay={0}
        cursorColor="#f0d2d2"
        multiText={[
          'I build things for the web',
          'Full Stack Developer',
        ]}
        multiTextDelay={3000}
        typeSpeed={70}
        multiTextLoop
      />
    </div>
    <div className="hero__title-4">
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Montserrat',
          color: '#f0d2d2',
          fontWeight: 700,
          fontSize: '3.2rem',
        }}
        startDelay={0}
        cursorColor="#f0d2d2"
        multiText={[
          'I build things for the web',
          'Full Stack Developer',
        ]}
        multiTextDelay={3000}
        typeSpeed={70}
        multiTextLoop
      />
    </div>

    <p className="hero__description">
      I can help you build a product ,
      feature or website Look through some of my work and experience! If
      you like what you see and have a project you need coded, don’t
      hestiate to contact me.
    </p>
    <button className="btn" type="button">LET’S CONNECT</button>
  </section>
);

export default Hero;
