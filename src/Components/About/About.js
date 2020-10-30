import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import './About.css';
import Footer from "../Footer/Footer";
const About = () => {
    return (
      <Container>
        <NavigationBar></NavigationBar>
        <Row className="aboutMe">
          <Col sm={7}>
            <Image
              className="potrait2"
              src={require("../../image/potr.jpg").default}
              roundedCircle
            />
            <h2 className="titleName">Hi, I'm Rakhi Akter,</h2>

            <h6 id="about">
              A passionate,hard-working and self-motivated JavaScript and React
              Web Developer. Comfortable with backend technologies like MongoDB
              as well as Node.js and Express.js. Deeply interest to work in the
              Software industry with modern web technologies of different local
              & multinational Software/ IT agencies of Bangladesh and grow
              rapidly with increasing responsibilities.
            </h6>
          </Col>
          <Col sm={5}>
            <h3 className="skills">My Skills</h3>
            <ul className="list">
              <li>React.JS</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>Node.JS</li>
              <li>Express.JS</li>
              <li>Redux.JS</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>Firebase</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Material-UI</li>
              <li>Bootstrap4</li>
            </ul>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    );
};

export default About;