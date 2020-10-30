import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; 


const NavigationBar = () => {
   const resumeButton = () => {};
    return (
      <Container>
        <Navbar variant="light">
          <Navbar.Brand href="#home">
            <img
              className="lg"
              src={require("../../image/rakhi.png").default}
              alt=""
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/blogs" className="nav-link">
              Blog
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          <Link to="/resume">
            <Button variant="outline-dark" onClick={resumeButton}>Resume</Button>
          </Link>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;