import React, { useContext } from 'react';
import Media from './Media';
import ThemeContext from '../context/theme/ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="footer">
      <div className="social-media-mobile">
        <Media />
      </div>
      <p className={
        darkMode
          ? 'social-media-mobile-info'
          : 'social-media-mobile-info-light'
      }
      >
        © 2022-present Dino Quispe
      </p>
    </div>
  );
};

export default Footer;
