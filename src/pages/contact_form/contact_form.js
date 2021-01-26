import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import './contact-form.css';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">
                Contact me
            </h1>
            <Jumbotron className="contact-jumbotron">
            <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                {/* buttons */}
                <div className="m-2">
                    <a href="mailto:abir045@gmail.com" target="_blank" rel="noopener noreferrer ">
                        <Button variant="outline-danger" title="abir045@gmail.com">
                         <i className="fas fa-envelope-square"></i>
                             
                            Email Me
                        </Button>
                    </a>
                </div>

                <div className="m-2">
                    <a href="https://www.linkedin.com/in/salekin-imran-b2354349/" target="_blank" rel="noopener noreferrer ">
                        <Button variant="outline-primary" title="Visit my Linkedin">
                            <i className="fab fa-linkedin"></i>
                      
                            Linkedin

                        </Button>
                    </a>
                </div>

                <div className="m-2">
                    <a href="https://github.com/abir045" target="_blank" rel="noopener noreferrer ">
                        <Button variant="outline-dark" title="Visit my github">
                            <i className="fab fa-github-square"></i>
                      
                           Github

                        </Button>
                    </a>
                </div>
                </Col>
            </Row>
            </Jumbotron>
            
        </div>
    )
}

export default Contact
