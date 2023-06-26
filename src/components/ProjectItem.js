// ProjectItem.js

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectItem = ({ project }) => {
  const { name, description, images,github,website } = project;

  return (
    <div className="project-item">
    <h3>{name}</h3>
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`${name} - Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
    <div className="description-box">
      <p>{description}</p>
      {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"  className="link">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        )}
         {website && (
          <a href={website} target="_blank" rel="noopener noreferrer"  className="link">
         <i class="bi bi-link-45deg"></i>
            Website
          </a>
        )}
    </div>
    <hr className='mx-5'/>
  </div>

  );
};

export default ProjectItem;
