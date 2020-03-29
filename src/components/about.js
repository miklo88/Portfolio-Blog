import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className='about-container'>
      <p className='about-text'>something about me.</p>

      <Link className='home-link' to='/'>
        Home
      </Link>
    </div>
  );
}

export default About;
