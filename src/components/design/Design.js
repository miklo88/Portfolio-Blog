import React from "react";
import wip from "../../stockPhotos/doodle1.JPG";
import "./Design.scss";

function Design() {
  return (
    <div className='Design-container'>
      <h1 className='Design-title'>Design</h1>
      <div className='message-container'>
        <p className='wip'>
          This blog is still a work in progess. To see updates on how I create
          it follow me on Linkedin and twitter.
        </p>
      </div>
      <img className='wip-img' src={wip} alt='placement-holder' />
    </div>
  );
}

export default Design;
