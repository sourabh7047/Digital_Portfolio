import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple">INTRODUCE</span> MYSELF 👋
          </h1>
          <p className="home-about-body">
            I'm a <span style={{ color: '#6a0dad' }}>software engineer</span> passionate about creating impactful products using <span className="purple"><b>AI</b></span>, <span className="purple"><b>Machine Learning</b></span>, and <span className="purple"><b>Web Technologies</b></span> 🌐.
            <br />
            <br />
            With hands-on experience at <b>Genpact</b> and <b>Layer3Org</b>, I've worked on building scalable, cloud-native solutions, from <span className="purple"><b>AI-driven systems</b></span> to <span className="purple"><b>distributed architectures</b></span> and <span className="purple"><b>automated pipelines</b></span> 🚀.
            <br />
            <br />
            Whether I’m working on <b>Generative AI</b> 🤖, building <b>ML pipelines</b> 🧠, or crafting full-stack applications 💻, I love solving real-world problems and creating systems that are both <span style={{ fontStyle: 'italic' }}>efficient</span> and <span style={{ fontWeight: 'bold' }}>intuitive</span>.
          </p>
        </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sourabh7047"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sourabh_asharma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sourabh-asharma-5265701b0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
