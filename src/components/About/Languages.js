import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiJavascript,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

function Languages() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <p className="tech-text" >Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <p className="tech-text" >Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p className="tech-text" >Javascript</p>
      </Col>
    </Row>
  );
}

export default Languages;
