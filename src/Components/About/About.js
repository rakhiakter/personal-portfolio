import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import './About.css';
import Footer from "../Footer/Footer";
import KeySkills from '../KeySkills/KeySkills';
const About = () => {
    return (
      <Container>
        <NavigationBar></NavigationBar>
        <Row className="aboutMe">
          <Col sm={7}>
            <h1 className="titleName">
              {" "}
              <span className="myName"> Hello</span>, <br />
              This is <span className="myName">Rakhi Akter</span>,
            </h1>
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
            <Image
              className="potrait2"
              src={require("../../image/potr.jpg").default}
              fluid
            />
          </Col>
        </Row>
      
          <KeySkills></KeySkills>
       
        <Footer></Footer>
      </Container>
    );
};

export default About;