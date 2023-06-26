import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dev from '../images/coding img.jpeg'
import bg from '../images/bg.jpg';
import 'animate.css';


const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section className="about-section" style={{ backgroundImage: `url(${bg})` }} id='banner'>
    <Container>
      <Row>
        <Col md={6}>
          <div className={`text-container ${isLoaded ? 'animate__animated animate__fadeIn' : ''}`}>
           
       <h1> Hii, I'm Sakshi Jha ,</h1>
        <h3> Frontend Developer passionate about creating amazing web experiences using 
       <span className="highlight">
       <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("HTML")
         .pauseFor(1000)
         .deleteAll()
         .typeString("CSS")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Javascript")
         .pauseFor(1000)
         .deleteAll()
         .typeString("ReactJs")
         .start();
 }}
/>
       </span>
    
        </h3>
        <p className="info">Enthusiastic about frontend technologies, I am committed to mastering the art of building responsive and user-centric websites. Through my knowledge of HTML, CSS, JavaScript, and ReactJS, I aim to create intuitive and visually impressive web interfaces</p>
        <a class="connect-link" href="#contact">Let's Connect <i class="bi bi-arrow-right-circle"></i></a>

      
          </div>
        </Col>
        <Col md={6}>
          <div className="image-container">
            <img src={dev} alt="developer"/>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Banner