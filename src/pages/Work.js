import React, { useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import Project from '../components/Project';
import projects from '../data/projects';
import ThemeContext from '../context/theme/ThemeContext';

const Work = () => {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        className="work"
      >
        <h2
          className="work__title"
        >
          Projects
        </h2>
        <p
          className={
          darkMode
            ? 'work__text'
            : 'work__text work__text-light'
        }
        >
          Check out some of my latest projects
        </p>
        {projects.map((project) => (
          <motion.div
            className="work__card"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', delay: 0.5 }}
            key={project.id}
          >
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              language={project.language}
              live={project.live}
              source={project.source}
              darkMode={darkMode}
            />
          </motion.div>

        ))}
      </motion.div>
    </>
  );
};

export default Work;
