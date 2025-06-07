import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import FirstInternship from "./FirstWork";
import SecondInternship from "./SecondWork";
import ThirdWork from "./thirdwork";

function InternCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <FirstInternship />
        <SecondInternship />
        <ThirdWork/>
      </Card.Body>
    </Card>
  );
}

export default InternCard;
