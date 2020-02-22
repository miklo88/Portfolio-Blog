import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export default function Nav() {
  return (
    <div className='Nav'>
      <h1 className='Main-Title'>MIKLO</h1>
      <ul className='Nav-Menu'>
        {/* NAVIGATION LINKS AND NAV-LINK CONTAINERS */}
        <li className='Nav-Link'>
          <Link className='Link' to='/login'>
            LOGIN
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/about'>
            ABOUT
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/photos'>
            PHOTOGRAPHY
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/design'>
            DESIGN
          </Link>
        </li>
      </ul>
    </div>
  );
}
