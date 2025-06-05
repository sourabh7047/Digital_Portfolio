import React from "react";
import Card from "react-bootstrap/Card";
import { MdArrowForward } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Sourabh Asharma</span> from <span className="purple">Bhopal, Madhya Pradesh</span>.
          <br />Currently, I’m working as a <b>Software Development Engineer</b> at <span className="purple">Genpact</span>, specializing in <b>AI-driven systems</b> and <b>cloud-native technologies</b>.
          <br />
          <br />
          While coding is my main focus, I believe in maintaining a balanced lifestyle. When I’m not busy with solutions, you can find me indulging in my other passions:
        </p>
        <br />
        <br />

        <ul>
          <li className="about-activity">
            <MdArrowForward /> Gaming 🎮 – I enjoy both strategy and story-driven games.
          </li>
          <li className="about-activity">
            <MdArrowForward /> Dancing 💃 – A great way to relax and stay active.
          </li>
          <li className="about-activity">
            <MdArrowForward /> Singing 🎤 – Whether it's for fun or just enjoying the moment.
          </li>
          <li className="about-activity">
            <MdArrowForward /> Playing Badminton 🏸 – Always up for a friendly match!
          </li>
          <li className="about-activity">
            <MdArrowForward /> Playing Cricket 🏏 – Nothing beats the energy of a good cricket match!
          </li>
        </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Strive to build things that make a difference!" 💡
      </p>
        <footer className="blockquote-footer">Sourabh</footer>
      </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
