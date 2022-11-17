import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';
import Config from '../components/Config';
import SideBar from '../components/SideBar';
import ThemeContext from '../context/theme/ThemeContext';
import Work from './Work';

const Main = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={
        darkMode
          ? 'main__container'
          : 'main__container main__container-light'
    }
      >
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Work />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Config />
      </div>
    </>
  );
};

export default Main;
