import React from "react";
import "./style.css";
import {Container, Col, Row } from 'react-bootstrap';
import catmage from "../images/roblox/LuckyGatito.png"
import holyknight from "../images/roblox/lattishroyalguard.png"
import Badccgold from "../images/roblox/Badccgold.png"
import Bombo from "../images/roblox/Bombo.png"
import BoogaBoogaSharkRider from "../images/roblox/BoogaBoogaSharkRider.png"
import BookofMonstersKnittens from "../images/roblox/BookofMonstersKnittens.png"
import Chicken from "../images/roblox/Chicken.png"
import Devultra from "../images/roblox/Devultra.png"
import exclusiveplatinumasimo3089 from "../images/roblox/exclusiveplatinumasimo3089.png"
import FutureTechBoy from "../images/roblox/FutureTechBoy.png"
import GuardianSet from "../images/roblox/GuardianSet.png"
import GymnasticsOlivia from "../images/roblox/GymnasticsOlivia.png"
import HeroesofRobloxiaAmythesto from "../images/roblox/HeroesofRobloxiaAmythesto.png"
import PinewoodShuttlePilot from "../images/roblox/PinewoodShuttlePilot.png"
import redbraid from "../images/roblox/redbraid.png"
import SirMing from "../images/roblox/SirMing.png"
import Survivethekillercorruptcupid from "../images/roblox/Survivethekillercorruptcupid.png"
import theCelestial from "../images/roblox/theCelestial.png"
// import TwoPlayerKingdomTycoonBlacksmith from "../images/roblox/TwoPlayerKingdomTycoonBlacksmith.png"
import USCPFSoldier from "../images/roblox/USCPFSoldier.png"

function robloxtoys() {
  return (
    <div>
<Container>
  <Row className="row1">
    <Col>
    <img className="imgroblox"
      src={catmage}
      alt="Roblox Toy"
    />
    </Col>
    <Col><img className="imgroblox"
      src={Badccgold}
      alt="Roblox Toy"
    /></Col>
    <Col>
    <img className="imgroblox"
      src={holyknight}
      alt="Roblox Toy"
    />
    </Col>
  </Row>
  <Row>
    <Col> <img className="imgrobloxcar"
      src={theCelestial}
      alt="Roblox Toy"
    /></Col>
  </Row>
  <Row className="row">
    <Col>
    <img className="imgroblox"
      src={Bombo}
      alt="Roblox Toy"
    />
    </Col>
    <Col><img className="imgroblox"
      src={BoogaBoogaSharkRider}
      alt="Roblox Toy"
    /></Col>
    <Col>
    <img className="imgroblox"
      src={BookofMonstersKnittens}
      alt="Roblox Toy"
    />
    </Col>
  </Row>
  <Row className="row">
    <Col>
    <img className="imgroblox"
      src={Devultra}
      alt="Roblox Toy"
    />
    </Col>
    <Col><img className="imgroblox"
      src={Chicken}
      alt="Roblox Toy"
    /></Col>
    <Col>
    <img className="imgroblox"
      src={exclusiveplatinumasimo3089}
      alt="Roblox Toy"
    />
    </Col>
  </Row>
  <Row className="row">
    <Col>
    <img className="imgroblox"
      src={FutureTechBoy}
      alt="Roblox Toy"
    />
    </Col>
    <Col><img className="imgroblox"
      src={GuardianSet}
      alt="Roblox Toy"
    /></Col>
    <Col>
    <img className="imgroblox"
      src={GymnasticsOlivia}
      alt="Roblox Toy"
    />
    </Col>
  </Row>
  <Row className="row">
    <Col>
    <img className="imgroblox"
      src={HeroesofRobloxiaAmythesto}
      alt="Roblox Toy"
    />
    </Col>
    <Col><img className="imgroblox"
      src={redbraid}
      alt="Roblox Toy"
    /></Col>
    <Col>
    <img className="imgroblox"
      src={PinewoodShuttlePilot}
      alt="Roblox Toy"
    />
    </Col>
  </Row>
  <Row className="row">
    <Col>
    <img className="imgroblox"
      src={SirMing}
      alt="Roblox Toy"
    />
    </Col>
    <Col><img className="imgroblox"
      src={Survivethekillercorruptcupid}
      alt="Roblox Toy"
    /></Col>
    {/* <Col>
    <img className="imgroblox"
      src={TwoPlayerKingdomTycoonBlacksmith}
      alt="Roblox Toy"
    />
    </Col> */}
  </Row>
  <Row>
    <Col>    <img className="imgroblox"
      src={USCPFSoldier}
      alt="Roblox Toy"
    /></Col>
  </Row>
</Container>
    </div>
  );
}

export default robloxtoys;
