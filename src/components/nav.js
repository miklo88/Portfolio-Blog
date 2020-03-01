import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export default function Nav() {
  return (
    <div className='Nav'>
      <h1 className='Main-Title'>Miklo</h1>
      <ul className='Nav-Menu'>
        {/* NAVIGATION LINKS AND NAV-LINK CONTAINERS */}
        <li className='Nav-Link'>
          <Link className='Link' to='/'>
            Blog
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/about'>
            About
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/design'>
            Design
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/blog'>
            Blog userState
          </Link>
        </li>
      </ul>
    </div>
  );
}

// {
/* <li className='Nav-Link'>
          <Link className='Link' to='/blog'>
            Blog userState
          </Link>
        </li> */
// }
