/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import imageBg from '../assets/img/view.png';

const Project = ({
  title, description, image, language, live, source, darkMode,
}) => (
  <div className={
    darkMode
      ? 'portfolio__card'
      : 'portfolio__card portfolio__card-light'
  }
  >
    <a
      className="portfolio__card-image"
      href={live}
      target="_blank"
      rel="noreferrer"
    >
      <img className="portfolio__card-image-main" src={image} alt={title} />
      <div className="portfolio__card-image-bg">
        <img className="portfolio__card-image-bg-img" src={imageBg} alt="see project" />
      </div>
    </a>
    <div className={
      darkMode
        ? 'portfolio__card-info'
        : 'portfolio__card-info portfolio__card-info-light'
    }
    >
      <h2 className="portfolio__card-info-title">{title}</h2>
      <p className="portfolio__card-info-description">{description}</p>
      {language.map((lang) => (
        <i className="portfolio__card-info-language" key={lang}>{lang}</i>
      ))}
      <div className="portfolio__card-info-links">
        <a
          className={
            darkMode
              ? 'portfolio__card-info-links-a'
              : 'portfolio__card-info-links-a portfolio__card-info-links-a-light'
          }
          href={source}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="portfolio__card-info-links-icon" />
        </a>
        <a
          className={
            darkMode
              ? 'portfolio__card-info-links-a'
              : 'portfolio__card-info-links-a portfolio__card-info-links-a-light'
          }
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
