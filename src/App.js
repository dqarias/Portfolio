import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import NoMatch from './pages/NoMatch';
import './scss/main.scss';
import Config from './components/Config';
import SideBar from './components/SideBar';

const App = () => (
  <>
    <Header />
    <div className="main__container">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Config />
    </div>
  </>

);

export default App;
