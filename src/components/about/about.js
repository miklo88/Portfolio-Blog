import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className='about-container'>
      <p className='about-text'>something about me.</p>
      {/* what should i put on this page? */}
      {/* a lil blurb about me, my resume and a link to download my resume. */}

      <Link className='home-link' to='/'>
        Home
      </Link>
    </div>
  );
};

export default About;
