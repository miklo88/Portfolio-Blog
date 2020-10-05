import React from "react";
// import left from "../../stockPhotos/jazzsoftcolor2.png";
import "./Contact.scss";

const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <h1 className='contact-title'>CONTACT</h1>
      <span className='contact-line'></span>
      <form
        className='contact-form'
        action='mailto:credding07@gmail.com'
        method='post'
        encType='text/palin'
      >
        <label className='label-contact name'>name:</label>
        <input
          className='input-contact name'
          type='text'
          placeholder='your first and last name.'
        />
        <label className='label-contact email'>email:</label>
        <input
          className='input-contact email'
          type='email'
          placeholder='your-email@email.com'
        />
        <label className='label-contact message'>subject:</label>
        <input
          className='input-contact message'
          placeholder='subject of message'
        />
        <label className='label-contact message'>message:</label>
        <input className='input-contact message' placeholder='Hola :) ' />
        {/* input button */}
        <button className='submit-contact' type='submit' value='Send'>
          <i className='fas fa-mailbox'></i>
        </button>
        {/* toggle other mailbox and have it animate in????? */}
        {/* <button className='submit-contact' type='submit' value='Send'>
          <i className='fas fa-mailbox'></i>
        </button> */}
      </form>
    </div>
  );
};
export default ContactForm;
