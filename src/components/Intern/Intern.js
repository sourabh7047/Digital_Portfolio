import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
import InternCard from "./InternCard";
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
          {/* <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          > */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <InternCard />
          {/* </Col> */}
          {/* <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "80px" }}
            className="about-img"
          >
            <video width="500" height="500" autoplay="autoplay" loop muted>
              <source src={animatedVideo} type="video/mp4" />
            </video>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
