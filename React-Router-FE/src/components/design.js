import React from "react";
// STYLES
import "../styles/Design.scss";
import photo from "../stockPhotos/coffee L logo.jpg";

const Design = () => {
  return (
    <div className='D-Component'>
      <div className='D-Page'>
        <h1 className='Page-Title'>Design</h1>
        <img className='D-Image' src={photo} alt='' />
      </div>
    </div>
  );
};

export { Design };
