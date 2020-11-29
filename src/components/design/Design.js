import React from "react";
//GITHUB REPOS API
// import API from "./Api.js";
// <STYLES>
import "./Design.scss";
//PHOTOS
import two from "../../stockPhotos/PENECILLINV1.0.jpg";
import three from "../../stockPhotos/coffee_L_logo.jpg";
import four from "../../stockPhotos/Triple_Left.png";
import five from "../../stockPhotos/Triple_Right.png";

// const photos = [two, three, four, five];

// console.log(photos);

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
      <h1 className='design-title'>MARSHALLS LANDING</h1>
      <div className='photos-container'>
        <img className='two' src={two} alt='two' />
        <img className='three' src={three} alt='three' />
        <img className='four' src={four} alt='four' />
        <img className='five' src={five} alt='five' />
      </div>
      {/* api component */}
      {/* <API /> */}
    </>
  );
}

export default Design;
