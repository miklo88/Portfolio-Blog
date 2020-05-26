import React from "react";
import left from "../../stockPhotos/jazzsoftcolor2.png";
import "../contact/contact.scss";

const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <img className='left-img' src={left} alt='placement-holder' />
      <form
        className='contact-form'
        action='mailto:credding07@gmail.com'
        method='post'
        encType='text/palin'
      >
        <h1 className='contact-title'>Let's create something together.</h1>

        <input className='input text' type='text' placeholder='Name' />
        <input className='input email' type='email' placeholder='Email' />
        <input className='input message' placeholder='Message' />
        {/* input button */}
        <button className='submit-contact' type='submit' value='Send'>
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
