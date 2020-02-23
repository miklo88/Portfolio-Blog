import React from "react";
// STYLES
import "../styles/Photos.scss";
import photo1 from "../stockPhotos/blk_whtie1blk_white15_1.JPG";
import photo2 from "../stockPhotos/portBW1.JPG";
import photo3 from "../stockPhotos/onesmallstep.jpg";
const Photos = () => {
  return (
    <div className='P-Component'>
      <div className='P-Page'>
        <h1 className='Page-Title'>Photography</h1>
        <img className='P-Image' src={photo1} alt='' />
        <div className='I-Text'>
          <p className='P-Title'>"Private Dining Room" </p>
          <p className='P-Title'>mk the restaurant</p>
          <p className='P-Location'>Chicago, IL </p>
        </div>
      </div>
      <div className='P-Page'>
        <img className='P-Image' src={photo2} alt='' />
        <div className='I-Text'>
          <p className='P-Title'>"El Tiede" </p>
          <p className='P-Title'>Tiede Volcano</p>
          <p className='P-Location'>Tenerife - Islas de Las Canarias Espana </p>
        </div>
      </div>
      <div className='P-Page'>
        <img className='P-Image' src={photo3} alt='' />
        <div className='I-Text'>
          <p className='P-Title'>"one small step" </p>
          <p className='P-Title'>Tiede Volcano</p>
          <p className='P-Location'>Tenerife - Islas de Las Canarias Espana</p>
        </div>
      </div>
    </div>
  );
};
export { Photos };
