import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const hideBurger = (event) => {
    event.preventDefault();
    let hamburger = document.getElementById("hamburger");
    let navcontainer = document.getElementById("nav-burger");
    hamburger.classList.toggle("change");
    navcontainer.classList.toggle("show");
  };

  return (
    <div className='nav-container'>
      <Link className='home-link' to='/'>
        MIKLO
      </Link>
      {/* hamburger menu */}
      <nav onClick={hideBurger} className='navigation' id='nav-burger'>
        {/* About/contact page */}
        <Link className='links' to='/about'>
          About
        </Link>
        {/* link to blog/landing pg. signup pg incl. */}
        <Link className='links' to='/blog'>
          Blog
        </Link>
        <Link className='links' to='/contact'>
          Contact
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
