/* eslint-disable react/prop-types */

import React from 'react';
import { motion } from 'framer-motion';

const TextSpan = ({ children }) => {
  const animationLetter = () => ({
    color: '#a3225e',
    transform: [
      'scale3d(1, 1, 1)',
      'scale3d(1.4, .55, 1)',
      'scale3d(.75, 1.25, 1)',
      'scale3d(1.25, .85, 1)',
      'scale3d(.9, 1.05, 1)',
      'scale3d(1, 1, 1)',
    ],
  });

  return (
    <motion.h4
      className="span"
      whileHover={() => animationLetter()}
    >
      {children}
    </motion.h4>
  );
};

export default TextSpan;
