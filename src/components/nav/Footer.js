import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-icons'>
        <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
          <i class='fab fa-linkedin-in'></i>
        </a>
        <a href='https://github.com/miklo88'>
          <i class='fab fa-github'></i>
        </a>
        <a href='https://twitter.com/Miklo13F'>
          <i class='fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
}
