import React, { useContext } from 'react';
import {
  FaMoon, FaSun, FaVolumeUp, FaVolumeOff,
} from 'react-icons/fa';
import useSound from 'use-sound';
import allowSound from '../assets/sounds/open.wav';
import disableSound from '../assets/sounds/close.wav';
import ThemeContext from '../context/theme/ThemeContext';
import SoundContext from '../context/sound/SoundContext';

const Config = () => {
  const { darkMode, handleTheme } = useContext(ThemeContext);
  const { soundMode, handleSound } = useContext(SoundContext);
  const [openSound] = useSound(allowSound);
  const [closeSound] = useSound(disableSound);

  return (
    <div
      className={
      darkMode
        ? 'config'
        : 'config config__light'
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
      <button
        type="button"
        className="config__btn"
        onClick={handleSound}
      >
        {
          soundMode
            ? (
              <FaVolumeUp
                onClick={closeSound}
                className={
        darkMode
          ? 'config__icon'
          : 'config__icon-light'
      }
              />
            ) : (
              <FaVolumeOff
                onClick={openSound}
                className={
        darkMode
          ? 'config__icon'
          : 'config__icon-light'
      }
              />
            )
}

      </button>
    </div>
  );
};

export default Config;
