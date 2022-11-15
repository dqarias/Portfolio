/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

const ThemeContext = createContext();

const initialTheme = true;
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initialTheme);

  const handleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  const data = { darkMode, handleTheme };
  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
