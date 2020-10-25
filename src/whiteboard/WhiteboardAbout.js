import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import miklo_lemon from "../stockPhotos/miklo_lemon.png";
import "./WhiteboardAbout.scss";

function Whiteboard_About() {
  const [bravo2, sayBravo2] = useState("");
  const [charlie3, sayCharlie3] = useState("");

  let two = "DESIGN";
  let three = "CONTACT";
  // contact
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayCharlie3(three);
    }, 100);
    return () => clearTimeout(timer);
  }, [three]);
  // design
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayBravo2(two);
    }, 100);
    return () => clearTimeout(timer);
  }, [two]);

  return (
    // if link = / display About Footer THIS IS ABOUT FOOTER
    <>
      {/* displaying the greet from useEffect */}
      <div className='footer-container'>
        {/* About display */}
        <div className='bravo'>
          <Link className='bravo-link' to='/design'>
            <h3 className='bravo title'>{bravo2}</h3>
          </Link>
        </div>
        <div className='charlie'>
          {/* contact link */}
          <Link className='charlie-link' to='/contact'>
            <h3 className='charlie title'>{charlie3}</h3>
          </Link>
          <div className='logos'>
            <div className='footer-icons'>
              <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a href='https://github.com/miklo88'>
                <i className='fab fa-github'></i>
              </a>
              <a href='https://twitter.com/Miklo13F'>
                <i className='fab fa-twitter'></i>
              </a>
            </div>
            {/* home link miklo */}
            <Link to='/'>
              <img
                className='miklo_lemon'
                src={miklo_lemon}
                alt='miklo_lemon'
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Whiteboard_About;
