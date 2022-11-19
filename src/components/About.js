import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MdDownload } from 'react-icons/md';
import useSound from 'use-sound';
import hoverButton from '../assets/sounds/hoverButton.wav';
import dino from '../assets/img/dino.jpg';
import ThemeContext from '../context/theme/ThemeContext';
import SoundContext from '../context/sound/SoundContext';

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 20, 0],
    transition: {
      type: 'spring',
      bounce: 0.6,
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

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const { soundMode } = useContext(SoundContext);
  const [buttonSound] = useSound(hoverButton);

  const handleDownloadResume = () => {
    fetch('ResumeDinoRonald.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'ResumeDinoRonald.pdf';
        alink.click();
      });
    });
  };

  return (
    <motion.div
      id="about"
      className={
      darkMode
        ? 'about'
        : 'about about-light'
    }
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
        <div className={
          darkMode
            ? 'about__info-desc'
            : 'about__info-desc about__info-desc-light'
        }
        >
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
          <button
            className="about__info-button btn"
            type="button"
            onClick={handleDownloadResume}
            onMouseOver={
          soundMode
            ? buttonSound
            : null
          }
            onFocus={
          soundMode
            ? buttonSound
            : null
          }
          >
            <span>RESUME</span>
            <MdDownload />
          </button>
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
};

export default About;
