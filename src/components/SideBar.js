import React from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../assets/img/Linkedin.svg';
import medium from '../assets/img/medium.svg';
import github from '../assets/img/github.svg';
import angellist from '../assets/img/angellist.svg';
import twitter from '../assets/img/twitter.svg';

const SideBar = () => (
  <>
    <Link
      to={{ pathname: 'https://herewecode.io/' }}
      target="_blank"
    >
      <img src={github} alt="github" />
    </Link>
    <Link
      to={{ pathname: 'https://herewecode.io/' }}
      target="_blank"
    >
      <img src={Linkedin} alt="linkedin" />
    </Link>
    <Link
      to={{ pathname: 'https://herewecode.io/' }}
      target="_blank"
    >
      <img src={medium} alt="medium" />
    </Link>
    <Link
      to={{ pathname: 'https://herewecode.io/' }}
      target="_blank"
    >
      <img src={angellist} alt="angellist" />
    </Link>
    <Link
      to={{ pathname: 'https://herewecode.io/' }}
      target="_blank"
    >
      <img src={twitter} alt="twitter" />
    </Link>
  </>
);

export default SideBar;
