import "./style.css";
import React, { Component } from "react";
import a1 from "../images/extracars/1.png"
import a2 from "../images/extracars/2.png"
import a3 from "../images/extracars/3.png"
import a4 from "../images/extracars/4.png"
import a5 from "../images/extracars/5.png"
import a6 from "../images/extracars/6.png"
import a7 from "../images/extracars/7.png"
import a8 from "../images/extracars/8.png"
import a9 from "../images/extracars/9.png"
import a10 from "../images/extracars/10.png"
import a11 from "../images/extracars/11.png"
import a12 from "../images/extracars/12.png"
import a13 from "../images/extracars/13.png"
import a14 from "../images/extracars/14.png"
import a15 from "../images/extracars/15.png"
import a16 from "../images/extracars/16.png"
import a17 from "../images/extracars/17.png"
import a18 from "../images/extracars/18.png"
import a19 from "../images/extracars/19.png"
import a20 from "../images/extracars/20.png"
import a21 from "../images/extracars/21.png"
import a22 from "../images/extracars/22.png"
import a23 from "../images/extracars/23.png"
import a24 from "../images/extracars/24.png"
import a25 from "../images/extracars/25.png"
import a26 from "../images/extracars/26.png"
import a27 from "../images/extracars/27.png"
import a28 from "../images/extracars/28.png"
import a29 from "../images/extracars/29.png"
import a30 from "../images/extracars/30.png"
import a31 from "../images/extracars/31.png"
import a32 from "../images/extracars/32.png"
import a33 from "../images/extracars/33.png"
import a34 from "../images/extracars/34.png"
import a35 from "../images/extracars/35.png"
import a36 from "../images/extracars/36.png"
import a37 from "../images/extracars/37.png"
import a38 from "../images/extracars/38.png"
import a39 from "../images/extracars/39.png"
import a40 from "../images/extracars/40.png"
import a41 from "../images/extracars/41.png"
import a42 from "../images/extracars/42.png"
import a43 from "../images/extracars/43.png"
import a44 from "../images/extracars/44.png"
import a45 from "../images/extracars/45.png"
import a46 from "../images/extracars/46.png"
import a47 from "../images/extracars/47.png"
import a48 from "../images/extracars/48.png"
import a49 from "../images/extracars/49.png"
import a50 from "../images/extracars/50.png"
import a51 from "../images/extracars/51.png"


const img = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a50, a51];

class Carcards extends Component {

  render(){
    return (
     <>
       {img.map(img => <img src={img} alt="cars" className="extracarsimg"/>)}
     </>
    );
  }
    
}
export default Carcards;