import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeProjects.css';
const HomeProjects = () => {
    return (
      <Container className="works">
        <h3 className="some">Some of my Projects</h3>
        <Container className="work">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={require("../../image/hard.png").default}
                  className="card-img fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Hard-Rock</h3>
                  <h5 className="date">2020</h5>
                  <p className="card-text">
                    A single page Lyrics searching app where people are can find
                    their desired lyrics and singer name.It provides segments of
                    lyrics in search results to help you identify the song
                    before heading to the full lyrics’ page.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={require("../../image/creative1.png").default}
                  className="card-img fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Creative Agency</h3>
                  <h5 className="date">2020</h5>
                  <p className="card-text">
                    A single-page web application with a sidebar including users
                    and admin section. Where users can buy any packages that are
                    related to web, graphics, and so on. Users also log in with
                    their Google account and admin can list their services.
                    Admin also can make a new admin.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={require("../../image/electronic1.png").default}
                  className="card-img fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">E-School</h3>
                  <h5 className="date">2020</h5>
                  <p className="card-text">
                    A single-page website and an e-learning school where
                    learners can buy any courses.This is the Edtech platform
                    also for Teachers and Students. Any teacher can post notes
                    and questions here. Students can read and practice tests
                    from anywhere and anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={require("../../image/social-buddy2.png").default}
                  className="card-img fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Social-Buddy</h3>
                  <h5 className="date">2020</h5>
                  <p className="card-text">
                    Social Buddy is a single page Application. It is similar to
                    Facebook. People can like and reply also.Users can know the
                    details of every profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={require("../../image/travel.png").default}
                  className="card-img fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Travel Guru</h3>
                  <h5 className="date">2020</h5>
                  <p className="card-text">
                  A single page web Application.It is a travelling Places, Hotel and Resorts 
                  booking site.Users can log this site with Email, Google and Facebook.
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