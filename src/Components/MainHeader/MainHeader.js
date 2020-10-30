
import React from 'react';
import { Col, Container, Image, Row, } from 'react-bootstrap';
import './MainHeader.css';


const MainHeader = () => {
    return (
      <Container className="mainHeader">
        <Row>
          <Col sm={7}>
            <h1 className="name">Hi, I'm Rakhi Akter,</h1>
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
              roundedCircle
            />
          </Col>
          <button className="get">About Me</button>
          <button className="get" variant="outline-Bittersweet">
            Get In Touch
          </button>
        </Row>
      </Container>
    );
};

export default MainHeader;