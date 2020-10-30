import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeProjects.css';
const HomeProjects = () => {
    return (
      <Container className="works">
        <h3 className="some">Some of my Projects</h3>
        <Container className="work">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={require("../../image/hard.png").default}
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Hard-Rock</h3>
                  <h5 className="date">2020</h5>
                  <p  class="card-text">
                    A single page Lyrics searching app where people are can find their desired lyrics and singer name.
                    </p>
                
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    );
};

export default HomeProjects;