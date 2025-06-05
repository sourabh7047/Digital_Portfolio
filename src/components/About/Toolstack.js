import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiJira,
  SiGooglecloud,
  SiDocker,  
  SiTerraform
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";

import { VscAzure } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
        <p className="tech-text" >Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-text" >Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p className="tech-text" >Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <p className="tech-text" >GCP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="tech-text" >Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
        <p className="tech-text" >Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <p className="tech-text" >Terraform</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
