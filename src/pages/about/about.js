import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from '../../assets/img/profile.jpg';
import './about.css';
import Button from 'react-bootstrap/Button';


const About = () => {
    return (
        <div id="about">
           <div className="about">

          
            <h1 className="pt-3 text-center font-details pb-3">About me</h1>

            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* profile image */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                         <Image className="profile justify-content-end" alt="profile" src={profile} roundedCircle fluid />
                        </Row>
                    
                    </Col>
                    {/* About me description */}
                    <Col xs={12} md={6}>
                       <Row className="align-items-start p-2 my-details rounded">
                           Hi there, I am <strong>&nbsp;Salekin Imran</strong> I am a passionate Web developer and  
                           an Information and
                           Communication Technology (ICT)
                          masters graduate from the University
                          of Agder, Norway.<br/> 
                          I am a frontend developer with React.js, Express.js,Node.js and mongoDb
                          <br/> 
                           {/* description */}
                       </Row>
                     <Row>
                         {/* buttons */}
                         <Col className="d-flex justify-content-center flex-wrap">
                         <div>
                             <a href="#contact">
                                 <Button className="m-2" variant="outline-info">Lets talk</Button>
                             </a>
                         </div>
                         <div>
                    <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/abir045" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/salekin-imran-b2354349/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                         
                         </Col>
                         </Row>
                         </Col>

                </Row>

            </Container>
             </div>
        </div>
    )
}

export default About
