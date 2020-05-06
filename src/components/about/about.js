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

          <p className='what'>What do I do? </p>
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
        <ul className='loves'>
          <p>loves = </p>
          <li>[</li>
          <li>“salsa dancing”,</li>
          <li>“team driven debauchery”,</li>
          <li>wholeness from learning and teaching”,</li>
          <li>the art of running”,</li>
          <li>"late night problem solving”,</li>
          <li>"the stackoverflow gods who answer questions”,</li>
          <li>"seasonal tasting menus with a heavy pour of wine knowledge”,</li>
          <li>"to visually invoke your attention”,</li>
          <li>"chicago summers”</li>
          <li>]</li>
        </ul>
        <ul className='hates'>
          <p>hates =</p>
          <li>[</li>
          <li>“open mouth chewers”,</li>
          <li>“meanies”</li>
          <li>]</li>
        </ul>
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
