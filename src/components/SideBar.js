import React, { useContext } from 'react';
import Media from './Media';
import ThemeContext from '../context/theme/ThemeContext';

const SideBar = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <aside className={
    darkMode
      ? 'social-media'
      : 'social-media social-media-light'
  }
    >
      <Media />
    </aside>
  );
};

export default SideBar;
