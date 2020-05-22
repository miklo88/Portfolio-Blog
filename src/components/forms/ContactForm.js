import React from "react";
import "../contact/contact.scss";

const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <h1 className='contact-title'>Can't wait to hear from you!</h1>
      <form
        className='contact-form'
        action='mailto:credding07@gmail.com'
        method='post'
        encType='text/palin'
      >
        <label className='name-label'>Name:</label>
        <input className='name-input' type='text' placeholder='Name' />
        <label className='email-label'>Email:</label>
        <input className='email-input' type='email' placeholder='Email' />
        <label className='message-label'>Message:</label>
        <input className='message-input' placeholder='Message' />

        <input type='submit' className='submit-contact' value='Send' />
      </form>
    </div>
  );
};
export default ContactForm;
