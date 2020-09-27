import React from "react";
import "./Whiteboard.scss";

export default function Whiteboard() {
  function toggleMenu(e) {
    e.preventDefault();
    console.log("you clicked menu");
  }
  return (
    <div className='whiteboard-component'>
      <button className='home-btn'>MIKLO</button>
      <button onClick={toggleMenu} className='mock-menu' id='mobile-menu'>
        menu
      </button>
      <nav className='nav-tabs' id='nav-tabs'>
        <li className='mock-btn'>about</li>
        <li className='mock-btn'>design</li>
        <li className='mock-btn'>contact</li>
      </nav>
    </div>
  );
}
