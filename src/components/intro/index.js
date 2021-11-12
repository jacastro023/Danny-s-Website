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
  <h1 className="dannyintro"> I have my own Roblox game where I am still adding new things, please check out my game.<br></br> <a className="dannyintro" href="https://www.roblox.com/games/6242820196/Dannygamercutes-Place" rel="noreferrer" target="_blank">Roblox</a></h1>
</Container>
  );
}

export default Model1;
