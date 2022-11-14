import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import NoMatch from './pages/NoMatch';
import Media from './components/Media';
import './scss/main.scss';
import Config from './components/Config';

const App = () => (
  <>
    <Header />
    <div className="main__container">
      <Media />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Config />
    </div>
  </>

);

export default App;
