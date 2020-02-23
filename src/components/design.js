import React from "react";
// STYLES
import "../styles/Design.scss";
import photo1 from "../stockPhotos/kiosk EVENTS.jpg";
import photo2 from "../stockPhotos/Double_Kiosk_Left.png";

import photo300 from "../stockPhotos/Triple_Kiosk_Left.jpg";
import photo301 from "../stockPhotos/Triple_Kiosk_Center.jpg";
import photo302 from "../stockPhotos/Triple_Kiosk_Right.jpg";
import photo303 from "../stockPhotos/Triple_Kiosk.jpg";

const Design = () => {
  return (
    <div className='D-Component'>
      <div className='D-Page'>
        <h1 className='Page-Title'>Design</h1>
        <img className='D-Image' src={photo1} alt='' />
      </div>
      <div className='D-Page'>
        <img className='D-Image' src={photo2} alt='' />
      </div>
      <div className='DTriple-Page'>
        <img className='DTriple-Image' src={photo300} alt='' />
        <img className='DTriple-Image' src={photo301} alt='' />
        <img className='DTriple-Image' src={photo302} alt='' />
      </div>
      <div className='D-Page'>
        <img className='D-Image' src={photo303} alt='' />
      </div>
    </div>
  );
};

export { Design };
