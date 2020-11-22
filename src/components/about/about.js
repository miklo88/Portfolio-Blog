import React from "react";
import "./About.scss";

function About() {
  return (
    <div className='about-container'>
      {/* page title */}
      <h1 className='about-title'>ABOUT</h1>
      <span className='about-line'></span>
      {/* resume on display */}
      <div className='about-content'>
        <img src='resume/Carl-Redding-Resume.jpg' alt='display-window' />
      </div>
      {/* resumes / need to be updated. 22-NOV-2020 latest update.*/}
      {/* resume download link */}
      <a
        className='resume-link'
        href='resume/Carl-Redding-Resume.pdf'
        download='Carl_Redding_Resume.pdf'
      >
        Download PDF Resume
      </a>
    </div>
  );
}

export default About;
