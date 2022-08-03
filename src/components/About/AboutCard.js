import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sourabh Asharma </span>
            from <span className="purple"> Bhopal, Madhya Pradesh.</span>
            <br />I am a junior pursuing B.Tech in Biotechnology from NIIT University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing  computer Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sourabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
