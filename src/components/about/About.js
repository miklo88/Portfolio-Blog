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
        Getting you stop what you are doing. That has been my high since I first
        fell in love with art in high school.
        <br />
        <br />
        The name Miklo comes from the movie "Blood in, Blood Out". It was given
        to me as a nickname when I worked with la raza at the most chingon
        restaurant in Chicago. mk the restaurant. Talk wine to me.
        <br />
        <br />
        Most importantly, the place that gave me that nick-name, taught me that
        working hard will bring you success when you truly love what you do.
        <br />
        <br />
        Salud,
        <br />
        <br />
        Carl Redding
      </p>
    </section>
  );
}

export default About;
