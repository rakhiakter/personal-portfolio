import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';

const Resume = () => {
    
    return (
      <Container>
        <NavigationBar></NavigationBar>
        <div>
          <a
            href={require("../../image/rakhi(resume) (1).pdf").default}
            download
          >
            <button className="btn btn-primary">Download Resume</button>
          </a>
        </div>
        <h1> Rakhi Akter</h1>
        <h3> Frontend Web Developer</h3>
        <div>
          Dhaka, Bangladesh
          <br />
          +8801758-013635
          <br />
          E-mail:rakhi32799@gmail.com
          <br />
          GitHub:https:/github.com/rakhiakter
          <br />
          LinkedIn:.linkedin.com/in/rakhi-akter-ba46ba1b1/
        </div>
        <div>
          <h3> Summary</h3>
          <p>
            A passionate, hard-working and self-motivated React web developer.
            Comfortable with backend technologies like MongoDB, Node.js and
            Express.js as well. I love to take challenges and working with new
            technologies. I believe in personal development through non-stop
            learning and efficient utilization of my knowledge. Now, looking for
            an organization where I’d get the opportunity to show my skills,
            dedication, and all of them would appreciate equitably.
          </p>
        </div>
        <div>
          <h3> SKILLS </h3>
          <p>
            ● HTML, CSS, JavaScript, React.JS, ES6, Redux.JS, MongoDB, Firebase,
            Express.JS, Git, Node.js, Material-UI, Bootstrap4,React Bootstrap, ●
            MS Word, MS Excel, PowerPoint, MS Access PROGRAMMING SKILLS ●
            Expertise in: React, JavaScript, ES6, Bootstrap, Material-UI,
            React-router-dom, HTML, CSS. ● Comfortable: MongoDB, Node.js,
            Express.js, Bootstrap4. ● Familiar: Redux.js, Angular, React Native,
            Firebase, Heroku, Netlify. ● Tools: VS Code, Git, Chrome Dev Tool,
            Figma.
          </p>
        </div>
        <div>
          <h3> Some Projects —</h3>
          <p>
            <h4> ● Hard Rock(A Lyrics Searching Website)</h4>
            <br />➢ A single-page website. ➢ A user easily can find any lyrics
            by this site. ➢ It comes with a clean and straightforward search
            system. ➢ Users easily find the lyrics with singer name. ➢ Languages
            & Tools: JavaScript, HTML, CSS, Bootstrap4. ➢
            GitHub:https://github.com/rakhiakter/hard-rock ➢
            Website:https://rakhiakter.github.io/hard-rock/
          </p>
          <p>
            <h4> ● Travel Guru </h4> <br />➢ A single-page online class website
            ➢ Languages & Tools: HTML, CSS, JavaScript, React, Bootstrap,
            Node.js, Firebase. ➢ Booking Hotel or resort. ➢ You will get room
            suggestions based on your selected area. ➢
            GitHub:https://github.com/rakhiakter/travel-guru ➢ Website:
            https://travel-guru-dcd6f.web.app
          </p>
          <p>
            <h4>● Creative Agency(A software service provider website)</h4>
            <br />➢ A single-page website with interactive UI. Authentication
            for Google and user role for only user and Admin. ➢ A full stack
            application where users can place order, view their order lists and
            also give their feedback. ➢ Admin can view service lists. ➢
            Languages & Tool: React, MongoDB, Node.js, Firebase, Express,
            Bootstrap, JavaScript(ES6), CSS, HTML, Heroku. ➢ GitHub(client):
            https://github.com/rakhiakter/creative-agency-client ➢
            GitHub(Server): https://github.com/rakhiakter/creative-agency-server
            ➢ Website:https://creative-agency-311af.web.app
          </p>
        </div>

        <div>
          <h3> EDUCATION</h3>
          BSS in Economics at National University, Bangladesh. <br />{" "}
          Programming Hero, Dhaka Complete Web Development(Batch2)2020
        </div>
        <div>
          <h3>LANGUAGES</h3>
          ● Bengali(Native) <br /> ● English(Professional level proficiency)
        </div>
      </Container>
    );
};

export default Resume;