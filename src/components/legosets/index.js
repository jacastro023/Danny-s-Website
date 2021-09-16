import React from "react";
import "./style.css";
import {Container, Col, Row } from 'react-bootstrap';
import robloxbees from "../images/minecraft/robloxbees.jpg"
import robloxpig from "../images/minecraft/robloxpig.jpg"

function legosets() {
  return (
    <div>
<Container>
  <Row>
    <Col>
    <img className="imgcar"
      src={robloxbees}
      alt="First slide"
    />
    </Col>
    <Col>2 of 3</Col>
    <Col>
    <img className="imgcar"
      src={robloxpig}
      alt="First slide"
    />
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default legosets;
