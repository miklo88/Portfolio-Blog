import React from "react";

import Contact from "../contact/contact";
import usePopup from "../../utils/custom-hooks/usePopup";
import "./Footer.scss";

const Footer = () => {
  const { isShowing, toggle } = usePopup();
  return (
    <div className='footer-container'>
      <button className='contact-btn' onClick={toggle}>
        Contact
      </button>
      <Contact isShowing={isShowing} hide={toggle} />
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
};
export default Footer;
