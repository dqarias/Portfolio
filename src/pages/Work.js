import React, { useContext } from 'react';
import Project from '../components/Project';
import projects from '../data/projects';
import ThemeContext from '../context/theme/ThemeContext';

const Work = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="work">
        {projects.map((project) => (
          <div
            className="work__card"
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
          </div>

        ))}
      </div>
    </>
  );
};

export default Work;
