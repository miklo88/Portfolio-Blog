import React from "react";
// import "contact.scss";

const Contact = () => {
  return (
    <div className='contact-container'>
      <form className='contact-form'>
        <label className='name'>
          Name:
          <input className='contact-input' type='text' placeholder='Name' />
        </label>
        <label className='email'>
          Email:
          <input className='contact-input' type='email' placeholder='Email' />
        </label>
        <label className='email'>
          Message:
          <input className='contact-input' type='text' placeholder='Message' />
        </label>
        <button className='submit-contact' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};
export default Contact;
