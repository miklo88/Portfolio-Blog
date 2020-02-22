import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export default function Nav() {
  return (
    <div className='Nav'>
      <h1 className='Main-Title'>MIKLO</h1>
      <ul className='Nav-Menu'>
        <li className='Nav-Link'>
          <Link className='Link' to='/login'>
            Login
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/about'>
            About
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/photos'>
            Photography
          </Link>
        </li>
        <li className='Nav-Link'>
          <Link className='Link' to='/design'>
            Design
          </Link>
        </li>
      </ul>
    </div>
  );
}
