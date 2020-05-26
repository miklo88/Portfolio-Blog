import React from "react";
import left from "../../stockPhotos/jazzsoftcolor2.png";
import "../contact/contact.scss";

const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <img className='left-img' src={left} alt='placement-holder' />
      <h1 className='contact-title'>Let's create something together.</h1>
      <form
        className='contact-form'
        action='mailto:credding07@gmail.com'
        method='post'
        encType='text/palin'
      >
        <input className='input text' type='text' placeholder='Name' />
        <input className='input email' type='email' placeholder='Email' />
        <input className='input message' placeholder='Message' />
        {/* input button */}
        <input className='submit-contact' type='submit' value='Send' />
      </form>
    </div>
  );
};
export default ContactForm;
