import React, { useState } from "react";

export default function ContactForm() {
  const [form, setContactForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h1>Can't wait to hear from you!</h1>
        <label className='name'>
          Name:
          <input className='contact-input' type='text' placeholder='Name' />
        </label>
        <label className='email'>
          Email:
          <input className='contact-input' type='email' placeholder='Email' />
        </label>
        <label className='message'>
          Message:
          <textarea className='contact-input' placeholder='Message' />
        </label>
        <button
          type='button'
          className='submit-contact'
          onClick="alert('message sent')"
        >
          Send
        </button>
      </form>
    </div>
  );
}
