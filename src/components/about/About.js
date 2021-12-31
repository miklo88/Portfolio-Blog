import React from "react";
import "./About.scss";

function About() {
  return (
    <>
      <div className='about-header'>
        {/* page title */}
        <h1 className='about-title'>ABOUT</h1>
        <span className='about-line'></span>
      </div>
      <div className='body-container'>
        <p className='content-title'>MIKLO</p>
        <div className='about-body'>
          {/* who you are and what youre doing */}
          <p className='about-content one'>
            I'm Carl Redding. I created Miklo so I can have a platform to
            showcase my passion for design and creating stolen moments. My
            simplicity in approach is understanding the rules and knowing when
            to break them.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
