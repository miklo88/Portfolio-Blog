import React from "react";
// STYLES
import "./Design.scss";
//PHOTOS
import one from "../../stockPhotos/ML/Bar/JULEPV1.0.jpg";
import two from "../../stockPhotos/ML/Eat/shrimp-po-boy.jpg";
import three from "../../stockPhotos/ML/Advertising_Print/hopper.jpg";
import four from "../../stockPhotos/ML/Bar/PENECILLINV1.2_1_2.jpg";
import five from "../../stockPhotos/Photography/Boy_B&W.jpg";
import six from "../../stockPhotos/Photography/didier.jpg";
import seven from "../../stockPhotos/Photography/metropolis.jpg";
import eight from "../../stockPhotos/ML/Advertising_Print/stella_summer_18.jpg";
import nine from "../../stockPhotos/ML/Advertising_Print/banquettesv1.1 copy.jpg";
import ten from "../../stockPhotos/ML/Coffee/coffee_L_logo.jpg";

var photos = [one, two, three, four, five, six, seven, eight, nine, ten];
//need to iterate through these on a timed loop interval.
// then the one selected is the img src

function Design() {
  var randomPhoto;
  randomPhoto = photos[Math.floor(Math.random() * photos.length)];
  console.log(randomPhoto.toString());

  return (
    <div className='container'>
      {/* <div className='design-container'> */}
      <h1 className='title'>
        Design : Graphic Design - Photography - Illustration
      </h1>
      <img src={randomPhoto} alt='' />

      <p className='design-footnote'>
        Marshalls Landing<br></br>2019|Spring Cocktails<br></br>Mint Julep
      </p>
    </div>
  );
}

export default Design;
