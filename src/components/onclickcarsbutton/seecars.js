import React, { Component } from "react";
import "./style.css";
import {Container} from 'react-bootstrap';
import Carcards from "../carcards/index.js"

class seecars extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div className="secars">
      <Container>
        <Carcards></Carcards>
</Container>
    </div>;
  }
}

export default seecars;