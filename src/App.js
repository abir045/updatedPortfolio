
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';

//components
import MyNavbar from "./components/my-navbar/mynavbar.js";
import MyCarousel from "./components/my-carousel/my-carousel.js";
import TitleMessage from "./components/title-message/title";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import ProjectTimeline from './components/project-timeline/project-timeline';
import Slide from "react-reveal/Slide";
import Contact from './pages/contact_form/contact_form';
import Footer from './components/Footer/footer';
import Particles from 'react-particles-js';
import {particleOption} from './particleOption';
import './App.css';

const App = () => {
  return (
    <div className="App" style={{position:"relative"}}>
        <MyNavbar/>
       <MyCarousel />
       <TitleMessage/>
     
     
      <Particles className="particles particles-box" params={particleOption}/>
      {/* about me section */}
      <div>  
      <Parallax 
        blur={{min:-1000, max:1000}}
        bgImage={require("./assets/img/bgdecent.jpg")}
        bgImageAlt=""
        strength={-200}
        > 
        
        <div>
        <Container className="container-box rounded">
        <Fade  duration={500} >
        <About/>
        </Fade>
        </Container>
        </div>
        </Parallax>  
        </div>
         
        

        {/* skill section */}
 
     
     <Container className="container-box rounded">
       <Slide bottom duration={500}>
         <hr/>
        <Skills/>
       </Slide>
      </Container>
     
    
      
    {/* project section */}
       <div>
     <Container className="container-box rounded">
       <Slide bottom duration={500}>
         <hr/>
        <ProjectTimeline/>
       </Slide>
      </Container>
     </div>
   
    {/* contact form */}

     <div>
     <Container className="container-box rounded">
       <Fade duration={500}>
         <hr/>
        <Contact/>
       </Fade>
      </Container>
     </div>

     <hr/>
     <Footer/>
     </div>

 
 
   
  );
}

export default App;
