import React from "react";
// STYLES
import "../styles/Photos.scss";
import photo from "../stockPhotos/art14blk_white15.JPG";
// import photo from "../stockPhotos/v1.46.JPG";
const Photos = () => {
  return (
    <div className='P-Component'>
      <div className='P-Page'>
        <h1 className='Page-Title'>Photography</h1>
        <img className='P-Image' src={photo} alt='' />
      </div>
    </div>
  );
};
export { Photos };
