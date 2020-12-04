import React from "react";
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
          - Front-end Web Development <br />
        </p>
        {/* EMAIL BUTTON */}
        <form
          className='contact-form'
          action='mailto:credding07@gmail.com'
          method='post'
          encType='text/palin'
        >
          <p className='email-p'>Say hi!</p>
          {/* submit button */}
          <button className='submit-contact' type='submit'>
            <i className='far fa-paper-plane'></i>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
