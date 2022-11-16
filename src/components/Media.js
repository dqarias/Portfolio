import React, { useContext } from 'react';
import {
  FaGithub, FaMedium, FaLinkedin, FaAngellist, FaTwitter,
} from 'react-icons/fa';
import useSound from 'use-sound';
import hoverButton from '../assets/sounds/hoverIcon.wav';
import ThemeContext from '../context/theme/ThemeContext';
import SoundContext from '../context/sound/SoundContext';

const Media = () => {
  const { darkMode } = useContext(ThemeContext);
  const { soundMode } = useContext(SoundContext);
  const [buttonSound] = useSound(hoverButton);
  return (
    <>
      <a
        href="https://github.com/dqarias"
        target="_blank"
        rel="noreferrer"
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
        <FaGithub
          className={
        darkMode
          ? 'social-media__icon social-media-mobile__icon'
          : 'social-media__icon social-media__icon-light social-media-mobile__icon-light'
      }
        />
      </a>
      <a
        href="https://www.linkedin.com/in/dino-ronald-quispe-arias/"
        target="_blank"
        rel="noreferrer"
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
        <FaLinkedin
          className={
          darkMode
            ? 'social-media__icon social-media-mobile__icon'
            : 'social-media__icon-light social-media-mobile__icon-light'
        }
        />
      </a>
      <a
        href="https://medium.com/@dino.quispea"
        target="_blank"
        rel="noreferrer"
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
        <FaMedium
          className={
          darkMode
            ? 'social-media__icon social-media-mobile__icon'
            : 'social-media__icon-light social-media-mobile__icon-light'
        }
        />
      </a>
      <a
        href="https://angel.co/u/dino-ronald-quispe-arias"
        target="_blank"
        rel="noreferrer"
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
        <FaAngellist
          className={
          darkMode
            ? 'social-media__icon social-media-mobile__icon'
            : 'social-media__icon-light social-media-mobile__icon-light'
        }
        />
      </a>
      <a
        href="https://twitter.com/DinoRonald7"
        target="_blank"
        rel="noreferrer"
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
        <FaTwitter
          className={
          darkMode
            ? 'social-media__icon social-media-mobile__icon'
            : 'social-media__icon-light social-media-mobile__icon-light'
        }
        />
      </a>
    </>
  );
};

export default Media;
