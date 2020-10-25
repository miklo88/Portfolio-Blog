import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import miklo_lemon from "../stockPhotos/miklo_lemon.png";
import "./WhiteboardContact.scss";

function Whiteboard_Contact() {
  const [alpha1, sayAlpha1] = useState("");
  const [bravo2, sayBravo2] = useState("");

  let one = "ABOUT";
  let two = "DESIGN";

  // design
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayBravo2(two);
    }, 100);
    return () => clearTimeout(timer);
  }, [two]);
  // about
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayAlpha1(one);
    }, 100);
    return () => clearTimeout(timer);
  }, [one]);
  return (
    <>
      {/* Contact Footer */}
      <div className='footer-container'>
        {/* about link */}
        <div className='bravo'>
          <Link className='bravo-link' to='/about'>
            <h3 className='bravo title'>{alpha1}</h3>
          </Link>
        </div>
        <div className='charlie'>
          {/* design link */}
          <Link className='charlie-link' to='/design'>
            <h3 className='charlie title'>{bravo2}</h3>
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
export default Whiteboard_Contact;
