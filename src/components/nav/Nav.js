import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className='nav-container'>
      <Link className='home-link' to='/'>
        MIKLO
      </Link>
      {/* About/contact page */}
      <nav className='navigation'>
        <Link className='links' to='/about'>
          About
        </Link>
        {/* link to blog/landing pg. signup pg incl. */}
        <Link className='links' to='/blog'>
          Blog
        </Link>
        {/* <Link className='links' to='/signup'>
          Login/Signup
        </Link> */}
        <Link className='links' to='/contact'>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
