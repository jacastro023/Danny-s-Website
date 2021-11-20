import React from "react";
import "./style.css";
import { Carousel } from 'react-bootstrap';
import car1 from "../images/cars/73BMW.png"
import car2 from "../images/cars/Airuptiongold.png"
import car3 from "../images/cars/Airuptionred.png"
import car4 from "../images/cars/DTW96IceCharger.png"
import car5 from "../images/cars/PixelShakerred.png"
import car6 from "../images/cars/PixelShakeryellow.png"
import car7 from "../images/cars/04riviera.png"
import car8 from "../images/cars/64impala.png"
import car9 from "../images/cars/1968mustang.png"
import car10 from "../images/cars/boneshaker.png"
import car11 from "../images/cars/elcamino.png"
import car12 from "../images/cars/g8108.png"
import car13 from "../images/cars/hotweiler.png"
import car14 from "../images/cars/lafasta.png"
import car15 from "../images/cars/muscleandblown.png"
import car16 from "../images/cars/rodgerdodger.png"

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
  <Carousel.Item>
    <img
    className="imgcar"
      src={car7}
      alt="seventh slide"
    />

    <Carousel.Caption>
      <h3>'04 Riviera</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car8}
      alt="eigth slide"
    />

    <Carousel.Caption>
      <h3>64 Impala</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car9}
      alt="nineth slide"
    />

    <Carousel.Caption>
      <h3>1968 Mustang</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car10}
      alt="tenth slide"
    />

    <Carousel.Caption>
      <h3>Bone Shaker</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car11}
      alt="eleventh slide"
    />

    <Carousel.Caption>
      <h3>El Camino</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car12}
      alt="twelveth slide"
    />

    <Carousel.Caption>
      <h3>G8108</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car13}
      alt="thirteenth slide"
    />

    <Carousel.Caption>
      <h3>Hotweiler</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car14}
      alt="fourteenth slide"
    />

    <Carousel.Caption>
      <h3>La Fasta</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car15}
      alt="fifthteenth slide"
    />

    <Carousel.Caption>
      <h3>Muscle and Blown</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="imgcar"
      src={car16}
      alt="Sixteenth slide"
    />

    <Carousel.Caption>
      <h3>Rodger Dodger</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    
  );
}

export default Favoritecars;
