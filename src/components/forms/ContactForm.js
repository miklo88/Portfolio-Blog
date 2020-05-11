import React from "react";

import "../contact/contact.scss";
const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <h1 className='contact-title'>Can't wait to hear from you!</h1>
      <form
        className='contact-form'
        action='mailto:miklo.concepcion@gmail.com'
        method='post'
        encType='text/palin'
      >
        {/* label*/}
        <label className='name-label'>Name:</label>
        {/* input */}
        <input className='name-input' type='text' placeholder='Name' />
        {/* label*/}
        <label className='email-label'>Email:</label>
        {/* input */}
        <input className='email-input' type='email' placeholder='Email' />
        {/* label*/}
        <label className='message-label'>Message:</label>
        {/* input */}
        <input className='message-input' placeholder='Message' />
        {/* input btns */}
        <input type='submit' className='submit-contact' value='Send' />
        <input type='reset' className='reset-contact' value='Reset' />
      </form>
    </div>
  );
};
export default ContactForm;
