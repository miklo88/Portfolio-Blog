import React from "react";
// import "./About.scss";

const About = () => {
  return (
    <div className='about-container'>
      {/* page title */}
      <h1 className='About-h1'>About</h1>
      <div className='title-head'>
        <p className='who'>who’s this guy?</p>
        <p className='about-text'> Carl Redding aka carlitos, aka miklo</p>
        <p className='what'>What do I do?</p>
        <p className='about-text'>
          Full Stack Web Developing Student at Lambda why ? im obsessed with
          stealing moments from people. dancing with color, typography, design,
          code, CREATING. code has become my platform to dissimenate what goes
          on in my head to a broader audience than the cat i live with, Diesel.
        </p>
        <p className='why'>Why does he do it? </p>
        <p className='about-text'>
          I’m obsessed with stealing moments from people. Dancing with color,
          typography, design, photography, code. CREATING. Coding has become a
          way for me logically solve problems by simple design and syntax.
        </p>{" "}
      </div>
      <div className='text-body'>
        <p className='about-text'>
          loves = [ “salsa dancing”, “team driven debauchery”, wholeness from
          learning and teaching”, the art of running”, late night problem
          solving”, the stackoverflow gods who answer questions”, seasonal
          tasting menus with a heavy pour of wine knowledge”, to visually invoke
          your attention”, chicago summers” ]
        </p>
        <p className='about-text'>
          hates = [ “open mouth chewers”, “meanies” ]
        </p>
      </div>
      <div className='resume-download'>
        {/* resume download link */}
        <a
          className='resume-link'
          href='resume/CARL-REDDING-RESUME.pdf'
          download='CarlsResume.pdf'
        >
          PDF Resume
        </a>
        <a
          className='resume-link'
          href='resume/CARL-REDDING-RESUME.docx'
          download='CarlsResume.docx'
        >
          Word Doc Resume
        </a>
      </div>
    </div>
  );
};

export default About;
