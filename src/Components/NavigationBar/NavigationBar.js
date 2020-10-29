import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
      
        <Container>
          <Navbar variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
           
          </Navbar>
        </Container>
     
    );
};

export default NavigationBar;