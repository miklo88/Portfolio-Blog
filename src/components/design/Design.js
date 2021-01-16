import React from "react";
import DesignCard from "./DesignCard.js";
// STYLES
import "./Design.scss";
//PHOTOS
import two from "../../stockPhotos/ML/PENECILLINV1.0.jpg";
import three from "../../stockPhotos/ML/coffee_L_logo.jpg";
import four from "../../stockPhotos/ML/Triple_Right.png";

function Design() {
  return (
    <>
      <div className='Design-container'>
        <div className='message-container'>
          <h1 className='Design-title'>DESIGN</h1>
          <span className='design-line'></span>
        </div>
        <p className='design-footnote'>
          Marshalls Landing<br></br>2019|Spring Cocktails<br></br>Mint Julep
        </p>
      </div>
      <h1 className='title'>
        Marshall's Landing <br /> DMK Restaurants <br /> Merchandise Mart -
        Chicago, IL
      </h1>
      <DesignCard photo={two} photoTitle='2019|Spring Cocktails Penicillin' />
      <DesignCard photo={three} photoTitle='2019|Coffee Bar Menu' />
      <DesignCard photo={four} photoTitle='2019|Kiosk Advertisements' />
    </>
  );
}

export default Design;
