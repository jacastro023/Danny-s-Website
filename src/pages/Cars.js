import React from "react";
import "../components/background4/style.css";
import Favoritecars from "../components/Favoritecars/index.js";
import Carsbutton from "../components/carsbutton/index.js";

function Cars() {
  return (
    <div className="background4">
      <Favoritecars></Favoritecars>
      <Carsbutton></Carsbutton>
    </div>
  );
}

export default Cars;
