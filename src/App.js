import React from 'react';
import Header from './components/Header';
import './scss/main.scss';
import { ThemeProvider } from './context/theme/ThemeContext';
import Main from './pages/Main';
import { SoundProvider } from './context/sound/SoundContext';

const App = () => (
  <>
    <ThemeProvider>
      <SoundProvider>
        <Header />
        <Main />
      </SoundProvider>
    </ThemeProvider>
  </>

);

export default App;
