/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const SoundContext = createContext();

const initialSound = false;
const SoundProvider = ({ children }) => {
  const [soundMode, setSoundMode] = useState(initialSound);

  const handleSound = () => {
    if (!soundMode) {
      setSoundMode(true);
    } else {
      setSoundMode(false);
    }
  };

  const data = { soundMode, handleSound };
  return (
    <SoundContext.Provider value={data}>
      {children}
    </SoundContext.Provider>
  );
};
export { SoundProvider };
export default SoundContext;
