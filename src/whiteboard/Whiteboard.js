import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import miklo_lemon from "../stockPhotos/miklo_lemon.png";
import "./Whiteboard.scss";

function Footer() {
  const [alpha1, sayAlpha1] = useState("");
  const [bravo2, sayBravo2] = useState("");
  const [charlie3, sayCharlie3] = useState("");
  // passing the variable saying to the useEffect in the sayGreet()
  let one = "ABOUT";
  let two = "DESIGN";
  let three = "CONTACT";

  useEffect(() => {
    const timer = setTimeout(() => {
      return sayCharlie3(three);
    }, 600);
    return () => clearTimeout(timer);
  }, [three]);
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayBravo2(two);
    }, 600);
    return () => clearTimeout(timer);
  }, [two]);
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayAlpha1(one);
    }, 500);
    return () => clearTimeout(timer);
  }, [one]);
  return (
    <>
      {/* displaying the greet from useEffect */}
      <div className='footer-container'>
        {/* landing display / DISPLAY 1. */}
        <div className='alpha'>
          {/* about link */}
          <Link to='/about'>
            <h3 className='alpha-title'>{alpha1}</h3>
          </Link>
        </div>
        <div className='bravo'>
          {/* design link */}
          <Link to='/design'>
            <h3 className='bravo-title'>{bravo2}</h3>
          </Link>
        </div>
        <div className='charlie'>
          {/* contact link */}
          <Link className='charlie-link' to='/contact'>
            <h3 className='charlie-title'>{charlie3}</h3>
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
export default Footer;

// multiple div layout skeleton layout ///
// 1
// LANDING //////
// div one - ABOUT
// title link to component
// 1/2 pg height 50%

// div two - DESIGN
// title link to component
// 37.5 %

// div three - CONTACT
// always contact link unless on contact page.
// container for two below flex column
// github icons
// miklo icon
// height 25%

///// multiple div layout skeleton layout /// 2 ///
// ABOUT //////
// 2.A
// div two - DESIGN
// title link to component
// 37.5 %

// div three - CONTACT
// always contact link unless on contact page.
// container for two below flex column
// github icons
// miklo icon
// height 25%

// DESIGN //////
// 2.B
// div two - ABOUT
// title link to component
// 37.5 %

// div three - CONTACT
// always contact link unless on contact page.
// container for two below flex column
// github icons
// miklo icon
// height 25%

///// multiple div layout skeleton layout /// 3 ///
// CONTACT //////
// 2.C
// div two - ABOUT
// title link to component
// 37.5 %

// div three - DESIGN
// always contact link unless on contact page.
// container for two below flex column
// github icons
// miklo icon
// height 25%
