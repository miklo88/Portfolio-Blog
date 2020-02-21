import React from "react";
// STYLES
import "../styles/Design.scss";
import photo from "../stockPhotos/PIv2.0 copy.jpg";

const Design = () => {
  return (
    <div className='D-Component'>
      <div className='D-Page'>
        <h1 className='Page-Title'>DESIGN</h1>
        <img className='D-Image' src={photo} alt='' />
      </div>
    </div>
  );
};

export { Design };
