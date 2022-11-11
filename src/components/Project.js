import React from 'react';
import { PropTypes } from 'prop-types';

const Project = ({
  title, description, image, language,
}) => (
  <div className="portfolio__card">
    <div>
      <img className="portfolio__card-image" src={image} alt={title} />
    </div>
    <div className="portfolio__card-info">
      <h2 className="portfolio__card-info-title">{title}</h2>
      <p className="portfolio__card-info-description">{description}</p>
      {language.map((lang) => (
        <i>{lang}</i>
      ))}
    </div>
  </div>
);

export default Project;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
