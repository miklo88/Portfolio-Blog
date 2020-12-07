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
      <div className='about-body'>
        {/* resume on display */}
        <p className='content-title'>MIKLO in context:</p>
        <p className='about-content-one'>
          My love for meticuously crafted food and wine aged into my days in the
          military. Creating a digital network out of frequency hop radios. To
          getting a graphic design job with no mentoring or previous experience.
          Getting my hands on an editor and creating my first 'Hello World'. I
          attract problems, break them, figure them out and re-build them.
        </p>
        {/* resumes / need to be updated. 04-DEC-2020 latest update.*/}
        {/* resume download link */}
        <a
          className='resume-link'
          href='resume/Carl_Redding.pdf'
          download='Carl_Redding_Resume.pdf'
        >
          Download PDF Resume
        </a>
      </div>
    </>
  );
}

export default About;
