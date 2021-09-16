import React from "react";
import "./style.css";
import { Button, Container, Col, Row } from 'react-bootstrap';


function carsbutton() {
  return (
    <div className="carsbutton">
  <Container>
  <Row>
    <Col> <div className="carsbutton1">
    <Button variant="primary" size="lg">
      See Sets
    </Button>
  </div></Col>
    <Col><div className="carsbutton2">
    <Button variant="primary" size="lg">
      See All Cars
    </Button>
  </div></Col>
  </Row>
  </Container>
    </div>
  );
}

export default carsbutton;
