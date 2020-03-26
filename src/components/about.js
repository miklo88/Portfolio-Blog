import React from "react";
import "../styles/About.scss";
// import photo1 from "../stockPhotos/jackson-stop.jpg";

const About = () => {
  return (
    <div className='A-Component'>
      <h1 className='Page-Title'>About</h1>
      <div className='A-Image'>
        {/* <img className='About-Image' src={photo1} alt='' /> */}
        <p className='About-me'>Filler text for meow.</p>
      </div>
    </div>
  );
};

export { About };
