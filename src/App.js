import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import NoMatch from './pages/NoMatch';
import SideBar from './components/SideBar';

const App = () => (
  <div>
    <Header />
    <SideBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </div>

);

export default App;
