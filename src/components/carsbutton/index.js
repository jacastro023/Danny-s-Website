import "./style.css";
import { Button, Container, Col, Row } from 'react-bootstrap';
import Seecars from "../onclickcarsbutton/seecars.js";
import Seesets from "../onclickcarsbutton/seesets.js";
import React, { Component } from "react";


class carsbutton extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showSeecars: false,
      showSeesets: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showSeesets":
        this.setState({ showSeesets: !this.state.showSeesets });
        break;
      case "showSeecars":
        this.setState({ showSeecars: !this.state.showSeecars });
        break;
      default:
    }
  }

  render() {
    const { showSeecars, showSeesets} = this.state;
    return (
      <div className="carsbutton">
       <Container>
   <Row>
     <Col> <div className="carsbutton1">
     <Button variant="primary" size="lg" onClick={() => this.hideComponent("showSeesets")}>
       See Sets
     </Button>
   </div></Col>
     <Col><div className="carsbutton2">
     <Button variant="primary" size="lg" onClick={() => this.hideComponent("showSeecars")}>
       See All Cars
     </Button>
   </div></Col>
   </Row>
   </Container>
        {showSeecars && <Seecars />}
        {showSeesets && <Seesets />}
      </div>
    );
  }
}
export default carsbutton;