import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <Contact isShowing={isShowing} hide={toggle} /> */}
      <Link className='links basic-button' to='/contactform'>
        <i className='fas fa-paper-plane'></i>
      </Link>

      <div className='footer-icons'>
        <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a href='https://github.com/miklo88'>
          <i className='fab fa-github'></i>
        </a>
        <a href='https://twitter.com/Miklo13F'>
          <i className='fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
};
export default Footer;
