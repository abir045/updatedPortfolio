
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import './App.css';
//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.js";
import TitleMessage from "./components/title-message/title";
import About from "./pages/about/about";
const App = () => {
  return (
    <div className="App" style={{position:"relative"}}>
      <MyNavbar/>
      <MyCarousel />
      <TitleMessage/>
      {/* about me section */}
      <div>  
      <Parallax blur={{min:-1000, max:1000}}
       strength={-200} 
       bgImage={require("./assets/img/background.jpg")}
        bgImageAlt="the cat"
         strength={200}>
         <div>  
     <Container className="container-box rounded">
       <Fade left duration={500} >
         <About/>
       </Fade>
     
       </Container>   
        </div>
    </Parallax>
   </div>
   </div>
  );
}

export default App;
