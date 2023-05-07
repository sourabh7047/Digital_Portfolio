import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJava,
  SiPython,
  SiTensorflow,
  SiJavascript
} from "react-icons/si";

function Languages() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
    </Row>
  );
}

export default Languages;
