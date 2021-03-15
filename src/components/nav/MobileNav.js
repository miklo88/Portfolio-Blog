import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  // mobile menu-dropdown toggle
  function toggleMenu(e) {
    e.preventDefault();
    document.getElementById("toggle-menu").classList.toggle("change");
    document.getElementById("nav-tabs").classList.toggle("show");
  }
  const mobile = (
    <header className='nav-container' id='nav-mobile'>
      {/* UN-TOGGLED STATE */}
      {/* home link */}
      <Link className='home-link' to='/'>
        MIKLO
      </Link>
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
        <Link className='links basic-button' to='/about'>
          about
        </Link>
        <Link className='links basic-button' to='/design'>
          design
        </Link>
        <Link className='links basic-button' to='/github'>
          code
        </Link>
        <Link className='links basic-button' to='/contact'>
          contact
        </Link>
      </nav>
    </header>
  );
  return <>{mobile}</>;
}
