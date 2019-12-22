import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Nav() {
  return (
    <BrowserRouter>
      <div className='Nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </BrowserRouter>
  );
}

export default Nav;
