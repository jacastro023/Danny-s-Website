import React from "react";
import "./style.css";
import logo from "./danny3d.png"
import { Card } from 'react-bootstrap';

function Model1() {
  return (
    //   <div className="Model1">
    //   <img src={logo} alt="3d model" className="img"></img>
    //   </div>
      <Card className="bg-dark text-white">
      <Card.Img src={logo} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Model1;
