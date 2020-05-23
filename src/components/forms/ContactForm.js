import React from "react";
import "../contact/contact.scss";
import left from "../../stockPhotos/jazzsoftcolor2.png";

const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <h1 className='contact-title'>Let's create something together.</h1>
      <form
        className='contact-form'
        action='mailto:credding07@gmail.com'
        method='post'
        encType='text/palin'
      >
        <img className='left-img' src={left} alt='placement-holder' />
        <input className='name-input' type='text' placeholder='Name' />
        <input className='email-input' type='email' placeholder='Email' />
        <input className='message-input' placeholder='Message' />
        {/* input button */}
        <input type='submit' className='submit-contact' value='Send' />
      </form>
    </div>
  );
};
export default ContactForm;
