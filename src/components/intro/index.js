import React from "react";
import "./style.css";
import danny from "./dannyintro.png"
import { Container, Row, Col } from 'react-bootstrap';

function Model1() {
  return (
      <Container className="introcontainer">
  <Row>
    <Col><img src={danny} alt="3d model" className="img" rounded></img></Col>
    <Col><div className="dannyintro">
      <h1 className="dannyintro">Hello, my name is Danny and this is my Roblox avatar.</h1>
      </div></Col>
  </Row>
</Container>
  );
}

export default Model1;
