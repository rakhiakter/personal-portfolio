import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
      <Container className="footer">
        <h5>
          Designed & Build by{" "}
          <a href="">
            <span className="designed">Rakhi Akter</span>
          </a>{" "}
          <i className="fab fa-github-square fa-2x"></i>
        </h5>
      </Container>
    );
};

export default Footer;