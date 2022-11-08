import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Header = () => (
  <nav>
    <img src={logo} alt="logo" width={200} />
    <ul>
      <NavLink to="/about">
        <li>About</li>
      </NavLink>
      <NavLink to="/skills">
        <li>My skills</li>
      </NavLink>
      <NavLink to="/portfolio">
        <li>Work</li>
      </NavLink>
      <NavLink to="/contact">
        <li>Contact</li>
      </NavLink>
    </ul>
  </nav>

);

export default Header;
