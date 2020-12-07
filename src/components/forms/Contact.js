import React from "react";
import Mailto from "./Mailto";
import "./Contact.scss";

function Contact() {
  return (
    <div className='contact-container'>
      {/* TITLE / SOCIAL MEDIA ICONS / MIKLO INFO */}
      <div className='contact-body-left'>
        <h1 className='contact-h1'>
          Let's work <br />
          together!
        </h1>
        <p className='miklo-info'>Find out who the man behind MIKLO is</p>
        {/* SOCIAL MEDIA ICONS */}
        <div className='media-icons'>
          <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/miklo88'>
            <i className='fab fa-github-square'></i>
          </a>
          <a href='https://instagram.com/miklo_a/'>
            <i className='fab fa-instagram-square'></i>
          </a>
        </div>
      </div>

      {/* EMAIL BUTTON */}
      <div className='contact-body-right'>
        <p className='miklo-design'>
          - Photography <br />
          - Visual Design <br />
          - Web Development <br />
        </p>
        {/* EMAIL BUTTON COMPONENT*/}

        <Mailto
          email='credding07@gmail.com'
          subject='Hello'
          body='Hello world!'
        ></Mailto>
      </div>
    </div>
  );
}
export default Contact;
