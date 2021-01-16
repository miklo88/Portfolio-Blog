import React from "react";
import DesignCard from "./DesignCard.js";
// STYLES
import "./Design.scss";
//PHOTOS
import two from "../../stockPhotos/ML/shrimp-po-boy.jpg";
import three from "../../stockPhotos/Photography/hopper.jpeg";
import four from "../../stockPhotos/Illustration/doodle1.jpeg";

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

      <h1 className='title'>Graphic Design|Photography|Illustration</h1>
      <DesignCard
        photo={two}
        photoTitle="- Marshall's Landing|DMK Restaurant Group -"
      />
      <DesignCard photo={three} photoTitle='- Freelance|Photography -' />
      <DesignCard photo={four} photoTitle='- Freelance|Illustration -' />
    </>
  );
}

export default Design;
