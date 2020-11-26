import React from "react";
import "./About.scss";

function About() {
  return (
    <div className='about-container'>
      {/* page title */}
      <h1 className='about-title'>ABOUT</h1>
      <span className='about-line'></span>
      {/* resume on display */}
      <p className='about-content'>
        A strategic food and wine guru who fell in love with tech while building
        a digital network out of a radio when enlisted in the military. I pursue
        and flourish in high-stress situations. My framework consists of being a
        highly motivated created problem solver with a decorated background in
        leadership, teamwork and impeccable standards. Enthusiastic about my
        development in Relativity's Fellowship program.
      </p>
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
