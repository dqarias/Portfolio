import React, { useContext } from 'react';
import { FaMoon, FaSun, FaVolumeUp } from 'react-icons/fa';
import ThemeContext from '../context/theme/ThemeContext';

const Config = () => {
  const { darkMode, handleTheme } = useContext(ThemeContext);
  console.log('Theme', darkMode);
  return (
    <div
      className={
      darkMode
        ? 'config'
        : 'config__light'
    }
    >
      <button
        type="button"
        className="config__btn"
        onClick={handleTheme}
      >
        {
        darkMode ? (
          <FaSun
            className="config__icon"
          />
        ) : (
          <FaMoon
            className="config__icon-light"
          />
        )

      }
      </button>
      <FaVolumeUp
        className={
        darkMode
          ? 'config__icon'
          : 'config__icon-light'
      }
      />
    </div>
  );
};

export default Config;
