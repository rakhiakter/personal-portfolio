import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './KeySkills.css';
const KeySkills = () => {
    return (
      <Container>
        <h1 className="keys">My Skills</h1>
        <Container className="languages">
          <img
            className="react"
            src={require("../../image/react2.png").default}
            alt=""
          />
          <img
            className="css"
            src={require("../../image/css.png").default}
            alt=""
          />
          <img
            className="es"
            src={require("../../image/es6.jfif").default}
            alt=""
          />
          <img
            className="boot"
            src={require("../../image/boot.jfif").default}
            alt=""
          />
        </Container>
        <Container className="languages">
          <img
            className="boot4"
            src={require("../../image/boot4.jfif").default}
            alt=""
          />
          <img
            className="ex"
            src={require("../../image/ex.png").default}
            alt=""
          />
          <img
            className="html"
            src={require("../../image/html.png").default}
            alt=""
          />
          <img
            className="js"
            src={require("../../image/js.png").default}
            alt=""
          />
        </Container>
      </Container>
    );
};

export default KeySkills;