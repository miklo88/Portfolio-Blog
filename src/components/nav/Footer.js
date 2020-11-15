import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer(props) {
  return (
    <>
      {/* displaying the greet from useEffect */}
      <div className='footer-container'>
        {/* landing display / DISPLAY 1. */}
        <div className='bravo'>
          <div className='footer-icons'>
            <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://github.com/miklo88'>
              <i className='fab fa-github-square'></i>
            </a>
            <a href='https://instagram.com/miklo34'>
              <i className='fab fa-instagram-square'></i>
            </a>
          </div>
          <div className='charlie'>
            <Link className='charlie-link' to='/contact'>
              <i className='fas fa-envelope-square'>{props.name}</i>
            </Link>
            <p>{props.username}</p>
            <p>{props.age}</p>
            <p>{props.value}</p>
            <p>{props.password}</p>
          </div>
        </div>
      </div>
      {console.log(props)}
    </>
  );
}
export default Footer;
