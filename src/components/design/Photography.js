import React from "react";
import "./Photography.scss";
import one from "../../stockPhotos/Photography/metropolis.jpg";
// import color from "../../stockPhotos/Photography/color.jpg";
import two from "../../stockPhotos/Photography/onesmallstep.jpg";
import three from "../../stockPhotos/Photography/missingpiece.jpg";
import four from "../../stockPhotos/Photography/discovery.jpg";
import five from "../../stockPhotos/Photography/puppers.jpg";

export default function Photography() {
  return (
    <div className='page-container'>
      <img className='one' src={one} alt='this' />
      <img className='two' src={two} alt='this' />
      <img className='three' src={three} alt='this' />
      <img className='four' src={four} alt='this' />
      <img className='five' src={five} alt='this' />
      {/* <img className='six' src={color} alt='this' /> */}
    </div>
  );
}
