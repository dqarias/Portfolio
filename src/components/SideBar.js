import React from 'react';
import {
  FaGithub, FaMedium, FaLinkedin, FaAngellist, FaTwitter,
} from 'react-icons/fa';

const SideBar = () => (
  <aside className="social-media">
    <a
      href="https://github.com/dqarias"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub className="social-media__icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/dino-ronald-quispe-arias/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin className="social-media__icon" />
    </a>
    <a
      href="https://medium.com/@dino.quispea"
      target="_blank"
      rel="noreferrer"
    >
      <FaMedium className="social-media__icon" />
    </a>
    <a
      href="https://angel.co/u/dino-ronald-quispe-arias"
      target="_blank"
      rel="noreferrer"
    >
      <FaAngellist className="social-media__icon" />
    </a>
    <a
      href="https://twitter.com/DinoRonald7"
      target="_blank"
      rel="noreferrer"
    >
      <FaTwitter className="social-media__icon" />
    </a>
  </aside>
);

export default SideBar;
