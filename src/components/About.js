import React from 'react';
import { motion } from 'framer-motion';
import dino from '../assets/img/dino1.jpeg';

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },

};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },

};

const About = () => (
  <motion.div
    className="about"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.5 }}
    transition={{ staggerChildren: 0.5 }}
  >
    <div className="about__tl">
      <motion.h2
        className="about__info-title"
        variants={textAnimate}
      >
        About Me
      </motion.h2>
      <span className="about__info-line" />
    </div>

    <div className="about__info">
      <div className="about__info-desc">
        <motion.p
          variants={textAnimate}
        >
          Hi! 👋 I am Dino Quispe, and I am a full-stack web developer with an electronic
          engineer’s degree who is enthusiastic about technology. I completed coursework
          at Microverse, where I’ve learned every day to code real projects in remote
          pair programming with other developers around the world, and improved my
          skills in communication, teamwork, work ethics, and work with deadlines.
        </motion.p>
        <br />
      </div>
      <motion.img
        className="about__img"
        variants={imageAnimate}
        src={dino}
        alt="dino"
      />
    </div>
  </motion.div>
);

export default About;
