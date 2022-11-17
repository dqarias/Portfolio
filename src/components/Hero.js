import React, { useContext } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import hoverButton from '../assets/sounds/hoverButton.wav';
import ThemeContext from '../context/theme/ThemeContext';
import SoundContext from '../context/sound/SoundContext';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const { soundMode } = useContext(SoundContext);
  const [buttonSound] = useSound(hoverButton);
  return (
    <motion.section
      id="hero"
      className={
      darkMode
        ? 'hero'
        : 'hero hero-light'
    }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className="hero__title-1">Hi, my name is</h2>
      <h2
        className={
        darkMode
          ? 'hero__title-2'
          : 'hero__title-2 hero__title-2-light'
      }
      >
        Dino Quispe
      </h2>
      {darkMode
        ? (
          <div>
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

          </div>
        )
        : (
          <div>
            <div className="hero__title-3">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: 'Montserrat',
                  color: '#002245',
                  fontWeight: 700,
                  fontSize: '6rem',
                }}
                startDelay={0}
                cursorColor="#002245"
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
                  color: '#002245',
                  fontWeight: 700,
                  fontSize: '3.2rem',
                }}
                startDelay={0}
                cursorColor="#002245"
                multiText={[
                  'I build things for the web',
                  'Full Stack Developer',
                ]}
                multiTextDelay={3000}
                typeSpeed={70}
                multiTextLoop
              />
            </div>
          </div>
        )}
      <p
        className={
        darkMode
          ? 'hero__description'
          : 'hero__description hero__description-light'
      }
      >
        I can help you build a product ,
        feature or website. Look through some of my work and experience! If
        you like what you see and have a project you need coded, don’t
        hestiate to contact me.
      </p>
      <button
        className="btn"
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
        LET’S CONNECT
      </button>
    </motion.section>
  );
};

export default Hero;
