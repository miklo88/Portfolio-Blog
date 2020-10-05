import React from "react";
// import wip from "../../stockPhotos/doodle1.JPG";
import "./Design.scss";

function Design() {
  return (
    <div className='Design-container'>
      <h1 className='Design-title'>Design</h1>
      <span className='design-line'></span>
      <div className='message-container'>
        {/* <img className='wip-img' src={wip} alt='placement-holder' /> */}
        <p className='design-footnote'>
          Marshalls Landing<br></br>2019|Spring Cocktails<br></br>Mint Julep
        </p>
      </div>
    </div>
  );
}

export default Design;
