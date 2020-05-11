import React from "react";

import "../contact/contact.scss";
const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <form
        className='contact-form'
        action='mailto:miklo.concepcion@gmail.com'
        method='post'
        encType='text/palin'
      >
        <h1 className='contact-title'>Can't wait to hear from you!</h1>
        <label className='contact-label'>
          Name:
          <input className='contact-input' type='text' placeholder='Name' />
        </label>
        <label className='contact-label'>
          Email:
          <input className='contact-input' type='email' placeholder='Email' />
        </label>
        <label className='contact-label'>
          Message:
          <input className='contact-input' placeholder='Message' />
        </label>
        <input type='submit' className='submit-contact' value='Send' />
        <input type='reset' className='submit-contact' value='Reset' />
      </form>
    </div>
  );
};
export default ContactForm;
