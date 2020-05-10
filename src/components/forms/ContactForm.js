import React from "react";
import useInput from "../../utils/custom-hooks/UseInput";
import "../contact/contact.scss";
export default function ContactForm() {
  const { value, bind, reset } = useInput("");

  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Talk to you soon ${value}`);
    reset();
  };

  return (
    <div id='contact-container' className='contact-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h1 className='contact-title'>Can't wait to hear from you!</h1>
        <label className='contact-label'>
          Name:
          <input
            className='contact-input'
            type='text'
            {...bind}
            placeholder='Name'
          />
        </label>
        <label className='contact-label'>
          Email:
          <input className='contact-input' type='email' placeholder='Email' />
        </label>
        <label className='contact-label'>
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
