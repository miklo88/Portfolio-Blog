import React from "react";
import "./Contact.scss";

function Contact() {
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
        <label className='label-contact subject'>subject:</label>
        <input
          className='input-contact subject'
          placeholder='subject of message'
        />
        <label className='label-contact message'>message:</label>
        <input className='input-contact message' placeholder='Hola :) ' />

        {/* submit button */}
        <button className='submit-contact' type='submit'>
          <i className='far fa-paper-plane'></i>
        </button>
      </form>
    </div>
  );
}
export default Contact;
