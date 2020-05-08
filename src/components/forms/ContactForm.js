import React, { useState } from "react";

export default function ContactForm() {
  const [form, setContactForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Talk to you soon ${form}`);
  };

  return (
    <div className='contact-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h1>Can't wait to hear from you!</h1>
        <label className='name'>
          Name:
          <input
            className='contact-input'
            type='text'
            value={form}
            onChange={(e) => setContactForm(e.target.value)}
            placeholder='Name'
          />
        </label>
        <label className='email'>
          Email:
          <input className='contact-input' type='email' placeholder='Email' />
        </label>
        <label className='message'>
          Message:
          <textarea className='contact-input' placeholder='Message' />
        </label>
        <button type='submit' className='submit-contact' value='Submit'>
          Send
        </button>
      </form>
    </div>
  );
}
