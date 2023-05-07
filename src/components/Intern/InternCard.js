import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import FirstInternship from "./FirstInternship";
import SecondInternship from "./SecondInternship";

function InternCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <FirstInternship />
        <SecondInternship />
      </Card.Body>
    </Card>
  );
}

export default InternCard;
