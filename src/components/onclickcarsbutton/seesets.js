import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row } from 'react-bootstrap';
import Bigwheel from "../images/carsets/bigwheel.png";
import carlot from "../images/carsets/carlot.png";
import dinosaur from "../images/carsets/dinosaur.png";
import firedept from "../images/carsets/firedept.png";
import garage from "../images/carsets/garage.png";
import gasstation from "../images/carsets/gasstation.png";
import ID from "../images/carsets/ID.png";
import monkeyset from "../images/carsets/monkeyset.png";
import monster from "../images/carsets/monster.png";
import policestation from "../images/carsets/policestation.png";
import shark from "../images/carsets/shark.png";
import skyscraper from "../images/carsets/skyscraper.png";
import underwater from "../images/carsets/underwater.png";

class seesets extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div id="sesets">
      <Container>
      <Row className="row1">
      <span className="idheading"> This is my Hotwheels ID track, Special ID Hotwheels cars can be used on the track.With the special cars you can keep track of the laps and speed in the Hotwheels ID App</span>
      <Col>
      <img className="IDset"
      src={ID}
      alt="ID hotwheels set"
      />
      </Col>
      </Row>
      <div className="carsetsdiv">
      <img className="carsset1"
      src={carlot}
      alt="hotwheels set"></img>

      <img className="carsset2"
      src={garage}
      alt="hotwheels set"></img>

      <img className="carsset1"
      src={skyscraper}
      alt="hotwheels set"></img>
      <img className="carsset2"
      src={monkeyset}
      alt="hotwheels set"></img>
      <img className="carsset1"
      src={Bigwheel}
      alt="hotwheels set"></img>
      <img className="carsset2"
      src={firedept}
      alt="hotwheels set"></img>
      <img className="carsset1"
      src={monster}
      alt="hotwheels set"></img>
      <img className="carsset2"
      src={gasstation}
      alt="hotwheels set"></img>
      <img className="carsset1"
      src={dinosaur}
      alt="hotwheels set"></img>
      <img className="carsset2"
      src={shark}
      alt="hotwheels set"></img>
      <img className="carsset1"
      src={policestation}
      alt="hotwheels set"></img>

      <img className="carsset2"
      src={underwater}
      alt="hotwheels set"></img>
      </div>
</Container >
    </div>
  }
}

export default seesets;