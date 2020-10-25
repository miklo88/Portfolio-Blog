import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import miklo_lemon from "../stockPhotos/miklo_lemon.png";
import "./WhiteboardDesign.scss";

function Whiteboard_Design() {
  const [alpha1, sayAlpha1] = useState("");
  const [charlie3, sayCharlie3] = useState("");
  // let one = <p>ABOUT</p>;
  let one = "ABOUT";
  let three = "CONTACT";
  // about
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayAlpha1(one);
    }, 100);
    return () => clearTimeout(timer);
  }, [one]);
  // contact
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayCharlie3(three);
    }, 100);
    return () => clearTimeout(timer);
  }, [three]);
  return (
    <>
      {/* Design Footer */}
      <div className='footer-container'>
        {/* about link */}
        <div className='bravo'>
          <Link className='bravo-link' to='/about'>
            <h3 className='bravo title'>{alpha1}</h3>
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
export default Whiteboard_Design;
