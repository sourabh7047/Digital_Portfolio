import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiGoogleCloudPlatform,
  DiPostgresql,
} from "react-icons/di";
import {
  SiFirebase,
  SiFlask,
  SiDocker,
  SiFastapi,
  SiLangchain,
  SiOpentelemetry 
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-text" >Node JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-text" >React JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLangchain/>
        <p className="tech-text" >Langchain</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <p className="tech-text" >FastAPI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-text" >GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="tech-text" >Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p className="tech-text" >Postgres</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p className="tech-text" >Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpentelemetry />
        <p className="tech-text" >Opentelemetry</p>
      </Col>
    </Row>
  );
}


export default Techstack;
