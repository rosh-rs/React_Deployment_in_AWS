import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roshan S </span>
            from <span className="purple"> Coimbatore, Tamil Nadu, India.</span>
            <br />
            <br />
            I am currently studying a <span className="purple">Bachelor of Engineering</span> in <span className="purple">Computer Science and Engineering</span> at Karpagam Institute of Technology
            <br />
            <br />

            I have successfully completed certifications in both <span className="purple">Cloud Computing </span>and <span className="purple">Java Programming </span>through the NPTEL platform
            <br />

            <br />
            Apart from coding, I have addition skills like
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Time Management
            </li>
            <li className="about-activity">
              <ImPointRight /> Puzzle Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Guiding
            </li>
          </ul>

          
  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
