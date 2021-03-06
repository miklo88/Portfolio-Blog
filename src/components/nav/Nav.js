import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav() {
  // mobile menu-dropdown toggle
  function toggleMenu(e) {
    e.preventDefault();
    document.getElementById("toggle-menu").classList.toggle("change");
    document.getElementById("nav-tabs").classList.toggle("show");
  }
  // here i want to have a un-toggled state of logo and either menu or items if desktop.
  // on click of menu if menu is tablet or mobile size.
  return (
    <div className='nav-container'>
      {/* UN-TOGGLED STATE */}
      {/* home link */}
      <Link className='home-link' to='/'>
        MIKLO
      </Link>
      {/* MOBILE NAV // CHANGE */}
      <button onClick={toggleMenu} className='toggle-nav' id='toggle-menu'>
        menu
      </button>
      {/* SHOW */}
      {/* navigation links */}
      <nav className='nav-tabs' id='nav-tabs'>
        {/* mobile nav menu aka change */}
        <button onClick={toggleMenu} className='mobile-nav' id='mobile-menu'>
          menu -
        </button>
        {/* About page */}
        <Link className='links basic-button' to='/about'>
          about
        </Link>
        {/* link to design page  */}
        <Link className='links basic-button' to='/design'>
          design
        </Link>
        {/* contact page */}
        <Link className='links basic-button' to='/contact'>
          contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
