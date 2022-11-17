import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import hoverButton from '../assets/sounds/hoverButton.wav';
import projects from '../data/projects';
import Project from './Project';
import ThemeContext from '../context/theme/ThemeContext';
import SoundContext from '../context/sound/SoundContext';

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
    },
  },

};

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext);
  const { soundMode } = useContext(SoundContext);
  const [buttonSound] = useSound(hoverButton);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <motion.div
      id="work"
      className={
        darkMode
          ? 'portfolio'
          : 'portfolio portfolio-light'
      }
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="portfolio__tl">
        <motion.h2
          className="portfolio__title"
          variants={textAnimate}
        >
          Portfolio
        </motion.h2>
        <span className="portfolio__line" />
      </div>
      <div className={
        darkMode
          ? 'portfolio__text'
          : 'portfolio__text portfolio__text-light'
      }
      >
        <p>Featured Projects</p>
      </div>

      <Slider {...settings}>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            language={project.language}
            live={project.live}
            source={project.source}
            darkMode={darkMode}
          />
        ))}
      </Slider>
      <NavLink to="/projects">
        <button
          className="portfolio-button btn"
          type="button"
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
          <span>SEE MORE</span>
        </button>
      </NavLink>
    </motion.div>
  );
};

export default Portfolio;
