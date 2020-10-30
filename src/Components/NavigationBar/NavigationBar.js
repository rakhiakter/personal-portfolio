import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css'; 


const NavigationBar = () => {
    return (
      <Container>
        <Navbar variant="light">
          <Navbar.Brand id="logo" href="#home">
            <img className="lg" src={require("../../image/rakhi.png").default} alt=""/>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="clr" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="clr" href="#features">
              About
            </Nav.Link>
            <Nav.Link className="clr" href="#pricing">
              Projects
            </Nav.Link>
            <Nav.Link className="clr" href="#pricing">
              Blog
            </Nav.Link>
            <Nav.Link className="clr" href="#pricing">
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="outline-dark">Resume</Button>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;