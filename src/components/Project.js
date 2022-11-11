/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({
  title, description, image, language, live, source,
}) => (
  <div className="portfolio__card">
    <div>
      <img className="portfolio__card-image" src={image} alt={title} />
    </div>
    <div className="portfolio__card-info">
      <h2 className="portfolio__card-info-title">{title}</h2>
      <p className="portfolio__card-info-description">{description}</p>
      {language.map((lang) => (
        <i className="portfolio__card-info-language" key={lang}>{lang}</i>
      ))}
      <div className="portfolio__card-info-links">
        <a
          className="portfolio__card-info-links-a"
          href={source}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="portfolio__card-info-links-icon" />
        </a>
        <a
          className="portfolio__card-info-links-a"
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkAlt className="portfolio__card-info-links-icon" />
        </a>
      </div>
    </div>
  </div>
);

export default Project;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
