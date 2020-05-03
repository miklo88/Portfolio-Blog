import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className='about-container'>
      {/* page title */}
      <h1>Hi!, I'm Carl!</h1>
      {/* about me blurb */}
      <p className='about-text'>something about me.</p>
      {/* resume download link */}
      <a href='resume/CARL-REDDING-RESUME.pdf' download='CarlsResume.pdf'>
        PDF Resume
      </a>
      <a href='resume/CARL-REDDING-RESUME.docx' download='CarlsResume.docx'>
        Word Doc Resume
      </a>

      {/* what should i put on this page? */}
      {/* a lil blurb about me, my resume and a link to download my resume. */}
    </div>
  );
};

export default About;
