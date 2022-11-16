import React from 'react';
import Header from './components/Header';
import './scss/main.scss';
import { ThemeProvider } from './context/theme/ThemeContext';
import Main from './pages/Main';

const App = () => (
  <>
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  </>

);

export default App;
