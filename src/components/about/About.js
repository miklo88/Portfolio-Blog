import React from "react";
import "./About.scss";
import desktop from "../../stockPhotos/doodle1.jpeg";

function About() {
  return (
    <>
      <div className='about-header'>
        {/* page title */}
        <h1 className='about-title'>ABOUT</h1>
        <span className='about-line'></span>
      </div>
      <div className='body-container'>
        <p className='content-title'>MIKLO</p>
        <div className='about-body'>
          {/* who you are and what youre doing */}
          <p className='about-content one'>
            I'm Carl Redding. I created Miklo so I can have a platform to
            showcase my passion for design and creating stolen moments. My
            simplicity in approach is of understanding the rules and knowing
            when to break them.
          </p>
          {/* how you got there */}
          <p className='about-content two'>
            I arrived to where I am today because I've always had an appetite
            for creativity. When I finally found my passion for making creative
            solutions to complex problems I instantly became hooked.
          </p>
          {/* where youre looking to go next */}
          <p className='about-content three'>
            I'm looking to take my love for art, design and photography by
            incorporating web development and software engineering. Now I can
            express that through my newly discovered love language. Finally
            exhausting my mind for the world wide web to see what I see.
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
      </div>
    </>
  );
}

export default About;
