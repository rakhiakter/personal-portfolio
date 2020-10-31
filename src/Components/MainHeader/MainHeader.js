
import React from 'react';
import { Col, Container, Image, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainHeader.css';


const MainHeader = () => {
   const aboutMe = () => {

   };
    const getTouch = () => {};
    return (
      <Container className="mainHeader">
        
        <Row>
          <Col sm={7}>
            <h1 className="name">
              Hi, I'm <span className="myName">Rakhi Akter</span>,
            </h1>
            <h3 className="name"> Web Developer & Programmer</h3>
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
              className="potrait"
              src={require("../../image/potr.jpg").default}
              fluid
            />
          </Col>
          <Link to="/about">
            {" "}
            <button className="get" onClick={aboutMe}>
              About Me
            </button>
          </Link>
          <Link to="contact">
            <button
              onClick={getTouch}
              className="get"
              variant="outline-Bittersweet"
            >
              Get In Touch
            </button>
          </Link>
        </Row>
      </Container>
    );
};

export default MainHeader;