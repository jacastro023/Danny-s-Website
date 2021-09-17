import React from "react";
import "./style.css";
import {Container, Col, Row } from 'react-bootstrap';
import catmage from "../images/roblox/LuckyGatito.png"
import holyknight from "../images/roblox/lattishroyalguard.png"

function robloxtoys() {
  return (
    <div>
<Container>
  <Row>
    <Col>
    <img className="imgcar"
      src={catmage}
      alt="First slide"
    />
    </Col>
    <Col>2 of 3</Col>
    <Col>
    <img className="imgcar"
      src={holyknight}
      alt="First slide"
    />
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default robloxtoys;
