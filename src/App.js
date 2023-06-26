import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skill from './components/Skill';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
   
    <>
<NavBar/>  
    <Banner/>
    <Skill/>
    <Project/>
    <Contact/>
    <hr />
    <Footer/>
    </>
   
   
  );
}

export default App;
