import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="py-3" expand="lg">
      <Container>
      <div className="logo">
        <div className="logo-circle">
          <span className="logo-text" href="#home">SJ</span>
        </div>
      </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="banner"  className="nav-link"  spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Home</Link>
      <Link to="skill"  className="nav-link"  spy={true}
            smooth={true}
            offset={-70}
            duration={500}> Skills</Link>
      <Link to="project"  className="nav-link"  spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Projects</Link>
          </Nav>
          <span className="nav-text">
          <div className="social-icons">
      <a href="https://twitter.com/Sakshi50038?t=VYCQPqGsoaIliOXIXz2I-A&s=35" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.linkedin.com/in/sakshi-jha-777a6b203" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://instagram.com/itssj.223?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <div className="connect-button"  onClick={() => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }}>
      
        Let's connect
        </div>
    </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar