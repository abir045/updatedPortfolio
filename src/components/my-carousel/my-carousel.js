import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './my-carousel.css';
import slide1 from '../../assets/img/slide1.jpg';
//import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';
import slide5 from '../../assets/img/slide5.jpg';
import ScrollDown from '../scroll-down/scroll-down';


const MyCarousel = () => {
    return (
        <div id="home">
        <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img "
      src= {slide3}
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img "
      src={slide5}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
<ScrollDown/>
            
        </div>
    )
}

export default MyCarousel 
