import React from 'react';
import ProjectItem from './ProjectItem';
import image1 from '../images/news 1.png';
import image2 from '../images/news 2.png';
import image3 from '../images/news 3.jpeg';
import image4 from '../images/inb 1.png';
import image5 from '../images/inb 2.jpeg';
import image6 from '../images/weather 1.jpeg';
import image7 from '../images/weather 2.jpeg';
import image8 from '../images/weather 3.jpeg';
import image9 from '../images/spotify 1.png';
import image10 from '../images/spotify 2.png';
import image11 from '../images/spotify 3.png';
import image12 from '../images/spotify 4.jpeg';


const Project = () => {
  // const flickityOptions = {
  //   autoPlay: 3000,
  //   // Add other Flickity options as needed
  // };

  const projectData = [
    {
      name: "NewsMonkey",
      description: "The NewsMonkey project is a responsive website built using ReactJS and the News API. It offers users a seamless experience of browsing news articles across various categories without the need to refresh the page. The project utilizes React Router DOM for smooth navigation between different sections and categories. Users can explore news articles on topics such as technology, sports, entertainment, and more. With an intuitive interface and real-time updates from the News API, the News App provides an engaging platform for users to stay informed and up-to-date with the latest news.",
      images: [image1, image2, image3],
      github:"https://github.com/sakshi55jha/Newsmonkey"
    },
    {
      name: "TODO APP",
      description: "The Todo List App project is a responsive website built using ReactJS. It offers users a convenient platform to create, read, update, and delete their notes or tasks. The app includes features like user authentication with API requests for signup and login, ensuring secure access to personal notes. Users can easily manage their tasks by adding new notes, editing existing notes, and deleting unnecessary ones. With a user-friendly interface and seamless data handling, the Todo List App provides a smooth and efficient way for users to organize and track their daily tasks.",
      images: [image4, image5]
    },
    {
      name: "Weather App",
      description: "The Weather project is a responsive web application developed using HTML, CSS, Bootstrap, and JavaScript. It provides users with the ability to search for weather information based on their location. The application displays real-time weather data, including temperature, humidity, and other relevant details. With an intuitive user interface, users can easily access and navigate through the weather information for their desired location. The project showcases the integration of APIs and the implementation of dynamic weather data retrieval, offering a convenient and informative experience for users.",
      images: [image6, image7, image8],
      github:"https://github.com/sakshi55jha/Weather-App",
      website:"https://sakshi55jha.github.io/Weather-App/"
    },
    {
      name: "Spotify-Clone",
      description: "The Spotify Clone project is a music player web application built using HTML, CSS, and JavaScript. It allows users to listen to their favorite songs with features like play, pause, loop, next, and previous buttons. While focusing on the core functionality of playing music, the project provides a simple and intuitive user interface. It serves as a demonstration of implementing basic music player functionality using HTML, CSS, and JavaScript.",
      images: [image9, image10, image11,image12],
      github:"https://github.com/sakshi55jha/Spotify-Clone",
      website:"https://sakshi55jha.github.io/Spotify-Clone/"
    }
  ];

  return (
    <div className="projects" id='project'>
    <b>Projects </b> 
    <p>Browse through my project collection and witness the outcomes of my coding adventures. From building interactive websites to crafting user-friendly interfaces, each project showcases my dedication to creating impactful digital experiences</p> 
      <hr />
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
