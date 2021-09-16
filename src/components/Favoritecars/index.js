import React from "react";
import "./style.css";
import { Carousel } from 'react-bootstrap';
import car1 from "../images/cars/73BMW.png"
import car2 from "../images/cars/Airuptiongold.png"
import car3 from "../images/cars/Airuptionred.png"
import car4 from "../images/cars/DTW96IceCharger.png"
import car5 from "../images/cars/PixelShakerred.png"
import car6 from "../images/cars/PixelShakeryellow.png"

function Favoritecars() {
  return (
    <div className="favoritecars">
      <div className="introfavorite">
          These are my Favorite Cars
      </div>
      <Carousel fade>
  <Carousel.Item>
    <img className="imgcar"
      src={car1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>'73 BMW'</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
    className="imgcar"
      src={car2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Airuption Gold</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Airuption Red</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car4}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>DTW96 Ice Charger</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car5}
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h3>Pixel Shaker Red</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car6}
      alt="Sixth slide"
    />

    <Carousel.Caption>
      <h3>Pixel Shaker Yellow</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    
  );
}

export default Favoritecars;
