import React from 'react';
import { NavLink } from 'react-router-dom';
import logow from '../assets/img/logow.png';

const Header = () => (
  <nav className="navigation">
    <img className="navigation__img" src={logow} alt="logo" />
    <ul className="navigation__menu">
      <NavLink to="/about">
        <li className="navigation__link">About</li>
      </NavLink>
      <NavLink to="/skills">
        <li className="navigation__link">My skills</li>
      </NavLink>
      <NavLink to="/portfolio">
        <li className="navigation__link">Work</li>
      </NavLink>
      <NavLink to="/contact">
        <li className="navigation__link">Contact</li>
      </NavLink>
    </ul>
  </nav>

);

export default Header;
