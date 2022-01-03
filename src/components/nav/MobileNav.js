import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const mobile = (
    <header className='nav-container' id='nav-mobile'>
      <Link className='home-link' to='/'>
        MIKLO
      </Link>
      <nav className='nav-tabs' id='nav-tabs'>
        <Link className='links basic-button' to='/about'>
          about
        </Link>
        <Link className='links basic-button' to='/design'>
          design
        </Link>
        <Link className='links basic-button' to='/github'>
          code
        </Link>
      </nav>
    </header>
  );
  return <>{mobile}</>;
}
