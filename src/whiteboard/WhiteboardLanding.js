import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import miklo_lemon from "../stockPhotos/miklo_lemon.png";
import "./WhiteboardLanding.scss";

function WhiteboardLanding(props) {
  const [alpha1, sayAlpha1] = useState("");
  const [bravo2, sayBravo2] = useState("");
  const [charlie3, sayCharlie3] = useState("");

  let one = "ABOUT";
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
  // about
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayAlpha1(one);
    }, 100);
    return () => clearTimeout(timer);
  }, [one]);

  return (
    // if link = / display Landing Footer THIS IS LANDING FOOTER
    <>
      {/* displaying the greet from useEffect */}
      <div className='footer-container'>
        {/* landing display / DISPLAY 1. */}
        <div className='alpha'>
          <Link className='alpha-link' to='/about'>
            <h3>{alpha1}</h3>
          </Link>
        </div>
        <div className='bravo'>
          <Link className='bravo-link' to='/design'>
            <h3>{bravo2}</h3>
          </Link>
        </div>
        <div className='charlie'>
          {/* home link miklo */}
          <Link className='miklo_logo' to='/'>
            <img className='miklo_lemon' src={miklo_lemon} alt='miklo_lemon' />
          </Link>
          {/* contact link */}
          <Link className='charlie-link' to='/contact'>
            <h3>{charlie3}</h3>
            {/* props injection */}
            <h3>{props.name}</h3>
            <h3>{props.name1}</h3>
            <h3>{props.name2}</h3>
          </Link>

          <div className='footer-icons'>
            <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://github.com/miklo88'>
              <i className='fab fa-github-square'></i>
            </a>
            <a href='https://instagram.com/miklo34'>
              <i className='fab fa-instagram-square'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhiteboardLanding;

// multiple div layout skeleton layout ///
