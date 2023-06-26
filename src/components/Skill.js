import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Skill = () => {
  const skills = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 80 },
    { name: 'JavaScript', progress: 75 },
    { name: 'ReactJS', progress: 60 },
  ];

  return (
    <section className="skills-section" id='skill'>
      <div className="container">
        <b>Skills</b>
        <p>Here are some of my skills I would like to provide an overview of my proficiency in HTML, CSS, JavaScript, and ReactJS. To give you an idea of my level of expertise</p>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="progressGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="blue" />
              <stop offset="100%" stopColor="purple" />
            </linearGradient>
          </defs>
        </svg>
        <Carousel>
          <Carousel.Item>
            <div className="row">
              {skills.slice(0, 2).map((skill, index) => (
                <div className="col-md-6" key={index}>
                  <div className="carousel-content">
                  <div className="progress-circle">
  <svg className="progress-circle-svg">
    <circle className="progress-circle-background" cx="50%" cy="50%" r="45%" />
    <circle
      className="progress-circle-fill"
      cx="50%"
      cy="50%"
      r="45%"
      style={{ strokeDashoffset: `calc(283% - (${skill.progress} * 283%) / 100)` }}
    />
    <text className="progress-text" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
      {skill.progress}%
    </text>
  </svg>
  <div className="skill-name">{skill.name}</div>
</div>

                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              {skills.slice(2, 4).map((skill, index) => (
                <div className="col-md-6" key={index}>
                  <div className="carousel-content">
                  <div className="progress-circle">
  <svg className="progress-circle-svg">
    <circle className="progress-circle-background" cx="50%" cy="50%" r="45%" />
    <circle
      className="progress-circle-fill"
      cx="50%"
      cy="50%"
      r="45%"
      style={{ strokeDashoffset: `calc(283% - (${skill.progress} * 283%) / 100)` }}
    />
    <text className="progress-text" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
      {skill.progress}%
    </text>
  </svg>
  <div className="skill-name">{skill.name}</div>
</div>

                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Skill