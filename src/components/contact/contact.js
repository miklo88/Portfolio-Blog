import React from "react";
import ReactDOM from "react-dom";
// import ContactForm from "../forms/ContactForm";
import "./contact.scss";

//contact popupcontainer displays popup message to user
const Contact = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          {/* <ContactForm /> */}
          <div className='contact-container'>
            <form className='contact-form'>
              <h1>Can't wait to hear from you!</h1>
              <label className='name'></label>
              Name:
              <input className='contact-input' type='text' placeholder='Name' />
              <label className='email'></label>
              Email:
              <input
                className='contact-input'
                type='email'
                placeholder='Email'
              />
              <label className='message'></label>
              Message:
              <textarea className='contact-input' placeholder='Message' />
              <button
                type='button'
                className='submit-contact'
                onClick="alert('message sent')"
              >
                Send
              </button>
            </form>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Contact;
