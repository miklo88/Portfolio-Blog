import React from "react";
import "./Whiteboard.scss";

export default function Whiteboard() {
  const toggleMenu = (e) => {
    e.preventDefault();
    // if the width is less than 1000px the tablet/mobile menu will display
    if (window.innerWidth < 1000) {
      //  toggle one
      let mockMenu = document.getElementById("mock-menu");
      let mobileMenu = document.getElementById("mobile-menu");
      //  toggle two
      mockMenu.classList.toggle("change");
      mobileMenu.classList.toggle("show");
    }
  };
  return (
    <div className='whiteboard-component'>
      {/* <p className='whiteboard-p'>Whiteboard</p> */}
      <div className='mock-nav'>
        <button className='home-btn'>home</button>
        <nav className='nav-tabs'>
          <li className='mock-btn'>about</li>
          <li className='mock-btn'>design</li>
          <li className='mock-btn'>contact</li>
        </nav>
        <button onClick={toggleMenu} className='mock-menu' id='mobile-menu'>
          menu
        </button>
      </div>
    </div>
  );
}
