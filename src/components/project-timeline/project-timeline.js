import React from 'react'
import {Timeline, Events,UrlButton, ImageEvent} from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import "./project-timeline.css";

//projects
import covid19 from "../../assets/img/projects/covid19.png";
import ecommerce from "../../assets/img/projects/ecommerce.png";
import tt from "../../assets/img/projects/twaratTechnology.png";



//skills
import HTML5 from "../../assets/img/skills/html5.svg";
import bootstrap from "../../assets/img/skills/bootstrap-4.svg";
import css3 from "../../assets/img/skills/css3-logo.svg";
import javascript from "../../assets/img/skills/javascript.svg";
import reactjs from "../../assets/img/skills/react-logo.svg";
import reactRouter from "../../assets/img/skills/reactrouter.svg";
import materialUi from "../../assets/img/skills/material-ui.svg";
import styledComponents from "../../assets/img/skills/styled-components.svg";
import nodejs from "../../assets/img/skills/nodejs.svg";
import expressJs from "../../assets/img/skills/express-js.svg";
import heroku from "../../assets/img/skills/heroku-logo.svg";
import sqaurespace from "../../assets/img/skills/squarespace.svg";
import GITHUB_PAGES from "../../assets/img/skills/github.svg";
import netlify from "../../assets/img/skills/netlify.svg";
import postgresql from "../../assets/img/skills/postgresql.svg";
import mongoDB from "../../assets/img/skills/mongodb.svg";
import git from "../../assets/img/skills/git.svg";


const ProjectTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
            <Timeline>
                <Events>
                <ImageEvent
            date="06/04/2020"
            className="text-center"
            text="Covid-19 Dashboard"
            src={covid19}
            alt="covid19 tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a covid-19 tracker App submitted in a Hackathon
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Tracks covid-19 patients</li>
                          <li>Powered by Bootstrap and fetch API with JS</li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={css3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={javascript}
                                alt="JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={bootstrap}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                            Bootstrap
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://abir045.github.io/covid19/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/abir045/covid19"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>


          {/* ecommerce project */}

           <ImageEvent
            date="02/03/2020"
            className="text-center"
            text="ecommerce"
            src={ecommerce}
            alt="ecommerce"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an ecommerce site for a musical band.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Purchase music and souvenirs </li>
                          <li>Powered by JS. </li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={css3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={javascript}
                                alt="JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={bootstrap}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                            Bootstrap
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://abir045.github.io/ecommerce_site/index.html"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/abir045/ecommerce_site"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>

          {/* squarespace project */}

          <ImageEvent
            date="02/10/2020"
            className="text-center"
            text="Tawrat Technology"
            src={tt}
            alt="ecommerce"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an ecommerce site for an electronics company.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Purchase elctronics and products. </li>
                          <li>Powered by SqaureSpace  </li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                       
                         
                          <li>
                            <span className="p-2">
                              <Image
                                src={sqaurespace}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                            Sqaure Space
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://tawrattechnology.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
       
              
              </div>
            </div>
          </ImageEvent>
   



                </Events>

            </Timeline>
        </div>
    )
}

export default ProjectTimeline