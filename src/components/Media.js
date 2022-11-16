import React, { useContext } from 'react';
import {
  FaGithub, FaMedium, FaLinkedin, FaAngellist, FaTwitter,
} from 'react-icons/fa';
import ThemeContext from '../context/theme/ThemeContext';

const Media = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <a
        href="https://github.com/dqarias"
        target="_blank"
        rel="noreferrer"
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
