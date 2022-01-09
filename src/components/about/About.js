import React from "react";
import "./About.scss";

function About() {
  //create function to change the font sizes or the background color. Color might be cooler.
  return (
    <section className='about-container'>
      {/* page title */}
      <h1 className='about-title'>About</h1>
      <p className='content-title'>MIKLO</p>
      <p className='about-content'>
        I'm Carl Redding. I created Miklo so I can have a platform to showcase
        my passion for design and creating stolen moments. My simplicity in
        approach is understanding the rules and knowing when to break them.
      </p>
    </section>
  );
}

export default About;
