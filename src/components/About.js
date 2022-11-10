import React from 'react';
import dino from '../assets/img/dino1.jpeg';

const About = () => (
  <div className="about">
    <h2 className="about__info-title">About me</h2>
    <div className="about__info">
      <div className="about__info-desc">
        <p>
          Hi! I am Dino Quispe, and I am a full-stack web developer with an electronic
          engineer’s degree who is enthusiastic about technology. I completed coursework
          at Microverse, where I’ve learned every day to code real projects in remote
          pair programming with other developers around the world, and improved my
          skills in communication, teamwork, work ethics, and work with deadlines.
        </p>
        <br />
        {/*  <p>
          I enjoyed automating processes and developing improvement projects to facilitate the
          work of machine operators in an industrial environment, and I got curious about
          how software development, machine learning, and artificial intelligence are changing
          the world and now I am focused on mastering web development and my next goals are build
          applications using machine learning to help people with disabilities, save animals
          and protect the environment that are my main reasons toward software developer.
        </p> */}
      </div>
      <img className="about__img" src={dino} alt="dino" />
    </div>
  </div>
);

export default About;
