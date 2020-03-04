import React from "react";
import { Link } from "react-router-dom";
import Clock from "../clock/clock";

import "../styles/Nav.scss";
import "../styles/Clock.scss";

export default function Nav() {
  return (
    <div className='Nav'>
      <h1 className='Main-Title'>miklo</h1>
      <ul className='Nav-Menu'>
        {/* NAVIGATION LINKS AND NAV-LINK CONTAINERS */}

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
            Blog
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/userRegistration'>
            Sign Up / Login
          </Link>
        </li>
      </ul>

      <div className='Clock-Container'>
        <Clock />
      </div>
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
