import React from "react";
// STYLES
import "./Design.scss";
//PHOTOS
import one from "../../stockPhotos/ML/Bar/JULEPV1.0.jpg";
import two from "../../stockPhotos/ML/Eat/shrimp-po-boy.jpg";
import three from "../../stockPhotos/ML/Advertising_Print/hopper.jpg";
import four from "../../stockPhotos/ML/Bar/PENECILLINV1.2_1_2.jpg";
import five from "../../stockPhotos/ML/Bar/theflemingv2.2.jpg";
import six from "../../stockPhotos/Photography/didier.jpg";
import seven from "../../stockPhotos/Photography/metropolis.jpg";
import eight from "../../stockPhotos/ML/Advertising_Print/stella_summer_18.jpg";
import nine from "../../stockPhotos/ML/Advertising_Print/banquettesv1.1 copy.jpg";
import ten from "../../stockPhotos/ML/Coffee/coffee_L_logo.jpg";

var photos = [one, two, three, four, five, six, seven, eight, nine, ten];

function Design() {
  var randomPhoto;
  randomPhoto = photos[Math.floor(Math.random() * photos.length)];
  // console.log(randomPhoto.toString());

  return (
    <div className='container'>
      <h1 className='title'>Design</h1>
      <img src={randomPhoto} alt='' />
    </div>
  );
}

export default Design;
