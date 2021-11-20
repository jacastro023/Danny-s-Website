import React, { Component } from "react";
import "./style.css";
import { Carousel } from 'react-bootstrap';
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
import idcar1 from "../images/idcars/arachnorod.png"
import idcar2 from "../images/idcars/fxb27.png"
import idcar3 from "../images/idcars/gt-hunter.png"
import idcar4 from "../images/idcars/rally-finale.png"
import idcar5 from "../images/idcars/super-blitzen.png"
import idcar6 from "../images/idcars/twin-mill.png"

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
      <div className="idheading"> These are my ID cars:</div>
      <Carousel>
  <Carousel.Item>
    <img
      className="imgcar"
      src={idcar1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Arachnorod</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imgcar"
      src={idcar2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>FXB27</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imgcar"
      src={idcar3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>GT Hunter</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imgcar"
      src={idcar4}
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h3>Rally Finale</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imgcar"
      src={idcar5}
      alt="fifth slide"
    />

    <Carousel.Caption>
      <h3>Super Blitzen</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imgcar"
      src={idcar6}
      alt="sixth slide"
    />

    <Carousel.Caption>
      <h3>Twin Mill</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
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