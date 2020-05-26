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
        <label className='label name'>Name:</label>
        <input className='input name' type='text' placeholder='Name' />
        <label className='label email'>Email:</label>
        <input className='input email' type='email' placeholder='Email' />
        <label className='label message'>Message:</label>
        <input className='input message' placeholder='Message' />
        {/* input button */}
        <input className='submit-contact' type='submit' value='Send' />
      </form>
    </div>
  );
};
export default ContactForm;
