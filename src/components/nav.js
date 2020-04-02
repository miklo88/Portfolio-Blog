import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className='nav-container'>
      {/* <h1 className='nav-h1'>MIKLO</h1> */}
      <Link className='home-link' to='/'>
        <h1>MIKLO</h1>
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
        <Link className='links' to='/signup'>
          Login/Signup
        </Link>
        {/* <li className='link'><Link to='/users' >Users</Link></li> */}
      </nav>
    </div>
  );
}

export default Nav;
