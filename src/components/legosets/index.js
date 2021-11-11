import React from "react";
import "./style.css";
import {Container} from 'react-bootstrap';
import robloxbees from "../images/minecraft/robloxbees.jpg"
import robloxpig from "../images/minecraft/robloxpig.jpg"

function legosets() {
  return (
<Container className="legocontainer">
    <img className="legosets1"
      src={robloxbees}
      alt="First slide"
    />
    <img className="legosets2"
      src={robloxpig}
      alt="First slide"
    />
</Container>
  );
}

export default legosets;
