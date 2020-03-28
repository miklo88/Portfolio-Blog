import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className='about-container'>
      <p>something about me. :)</p>

      <Link to='/'>Home</Link>
    </div>
  );
}

export default About;
