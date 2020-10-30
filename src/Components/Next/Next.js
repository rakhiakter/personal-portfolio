import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Next.css';
const Next = () => {
   const getTouch = () => {};
    return (
      <Container>
        <h5 className="nexts">What's Next</h5>
        <h1 className="inTouch">Get In Touch</h1>
        <h6 className="message">
          I'd love to hear from you . Whether you have a question or just want
          to say Hi, feel free to drop me a message. I'll try my best to
          <span className="you"> get back to you!</span>
        </h6>
        <Link>
          <button className="sayHi" onClick={getTouch}>
            Say Hi
          </button>
        </Link>
      </Container>
    );
};

export default Next;