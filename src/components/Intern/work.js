import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
import InternCard from "./WorkCard";
import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import Languages from "./Languages";
import animatedVideo from "../../Assets/animated-cube.mp4";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Internships And Work Experience</strong>
            </h1>
            <InternCard />

        </Row>
      </Container>
    </Container>
  );
}

export default About;
