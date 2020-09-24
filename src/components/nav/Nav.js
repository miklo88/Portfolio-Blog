import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav() {
  //dropdown menu
  // const hideMenu = (event) => {
  //   event.preventDefault();
  //   //if screen is larger than 1000px dont execute function.
  //   if (window.innerWidth < 1000) {
  //     let dropmenu = document.getElementById("menu");
  //     let navcontainer = document.getElementById("nav-menu");
  //     dropmenu.classList.toggle("change");
  //     navcontainer.classList.toggle("show");
  //     return false;
  //   }
  // };

  return (
    <div className='nav-container'>
      <Link className='home-link' to='/'>
        MIKLO
      </Link>

      {/* dropdown menu */}
      {/* <nav onClick={hideMenu} className='navigation' id='nav-menu'> */}
      <nav className='navigation' id='nav-menu'>
        {/* About page */}
        <Link className='links basic-button' to='/about'>
          about
        </Link>
        {/* link to design pg  */}
        <Link className='links basic-button' to='/design'>
          design
        </Link>
        {/* contact pg */}
        <Link className='links basic-button' to='/contactForm'>
          contact
        </Link>
      </nav>

      {/* toggle dropdown menu for tablet and mobile */}
      {/* <button onClick={hideMenu} className='menu' id='menu'>
        menu
      </button> */}
    </div>
  );
}

export default Nav;
