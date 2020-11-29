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
        <label className='label-contact name'>
          name:
          <input
            className='input-contact name'
            type='text'
            placeholder='Your first and last name.'
          />
        </label>
        <label className='label-contact email'>
          email:
          <input
            className='input-contact email'
            type='email'
            placeholder='Your-email@email.com'
          />
        </label>
        <label className='label-contact subject'>
          subject:
          <input
            className='input-contact subject'
            placeholder='Subject of message'
          />
        </label>
        <label className='label-contact message'>
          message:
          <textarea className='input-contact message' />
        </label>
        {/* submit button */}
        <button className='submit-contact' type='submit'>
          <i className='far fa-paper-plane'></i>
        </button>
      </form>
    </div>
  );
}
export default Contact;
