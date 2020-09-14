import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  //hamburger menu
  const hideBurger = (event) => {
    event.preventDefault();
    //if screen is larger than 1000px dont execute function.
    if (window.innerWidth < 1000) {
      let hamburger = document.getElementById("hamburger");
      let navcontainer = document.getElementById("nav-burger");
      hamburger.classList.toggle("change");
      navcontainer.classList.toggle("show");
      return false;
    }
  };

  return (
    <div className='nav-container'>
      <Link className='home-link' to='/'>
        MIKLO
      </Link>
      {/* hamburger menu */}
      <nav onClick={hideBurger} className='navigation' id='nav-burger'>
        {/* About/contact page */}
        <Link className='links basic-button' to='/about'>
          about
        </Link>
        {/* link to blog/landing pg. signup pg incl. */}
        <Link className='links basic-button' to='/design'>
          design
        </Link>
        <Link className='links basic-button' to='/contactForm'>
          contact
        </Link>
      </nav>
      {/* burger menu */}
      <button onClick={hideBurger} className='hamburger' id='hamburger'>
        <div className='line one'></div>
        <div className='line two'></div>
        <div className='line three'></div>
      </button>
    </div>
  );
};

export default Nav;
