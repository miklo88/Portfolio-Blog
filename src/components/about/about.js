import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className='about-container'>
      {/* page title */}
      <div className='about-body'>
        <h1 className='about-h1'>About</h1>
        <div className='title-head'>
          <em className='who'>Who is this guy?</em>
          <p className='who-text'> Carl Redding aka carlitos, aka miklo</p>

          <em className='what'>What do I do? </em>
          <p className='what-text'>
            I’m Full Stack Web Developing Student at Lambda.
          </p>

          <em className='why'>Why do I do it?</em>
          <p className='why-text'>
            I’m obsessed with stealing moments from people. Dancing with color,
            typography, design, photography, code. CREATING. Coding has become a
            way for me logically solve problems by simple design and syntax.
          </p>
        </div>
      </div>
      <div className='loves-links'>
        <p className='about-text'>
          <em>loves</em> = [ “salsa dancing”, “team driven debauchery”,
          wholeness from learning and teaching”, the art of running”, late night
          problem solving”, the stackoverflow gods who answer questions”,
          seasonal tasting menus with a heavy pour of wine knowledge”, to
          visually invoke your attention”, chicago summers” ]
          <br />
          <strong>hates</strong> = [ “open mouth chewers”, “meanies” ]
        </p>

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
    </div>
  );
};

export default About;
