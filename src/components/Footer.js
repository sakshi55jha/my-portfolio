import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
          <div className="social-links">
          <h3>Social Media</h3>
<div className='social-m'>
      <a href="https://twitter.com/Sakshi50038?t=VYCQPqGsoaIliOXIXz2I-A&s=35" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.linkedin.com/in/sakshi-jha-777a6b203" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://instagram.com/itssj.223?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      </div>
        </div>
        <div className="footer-contact">
          <h3>Contact </h3>
          <div className="connect-button">Let's connect</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My-Portfolio Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
