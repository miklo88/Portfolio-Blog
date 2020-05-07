import React from "react";
import ReactDOM from "react-dom";
// import "contact.scss";
//contact popupcontainer displays popup message to user
const Contact = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='contact-container'>
            <form className='contact-form'>
              <label className='name'>
                Name:
                <input
                  className='contact-input'
                  type='text'
                  placeholder='Name'
                />
              </label>
              <label className='email'>
                Email:
                <input
                  className='contact-input'
                  type='email'
                  placeholder='Email'
                />
              </label>
              <label className='email'>
                Message:
                <textarea className='contact-input' placeholder='Message' />
              </label>
              <button
                type='button'
                className='submit-contact'
                onclick="alert('message sent')"
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
