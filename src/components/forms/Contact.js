import React from "react";
import "./Contact.scss";
import hi from "../../stockPhotos/doodle1.jpeg";
function Contact() {
  return (
    <div id='contact-container' className='contact-container'>
      <h1 className='contact-title'>CONTACT</h1>
      <span className='contact-line'></span>
      {/* IMAGE AND CONTACT BUTTONS AND SOC MEDIA ICONS */}
      <div className='contact-body'>
        <img className='contact-img' src={hi} alt='hi' />
        <form
          className='contact-form'
          action='mailto:credding07@gmail.com'
          method='post'
          encType='text/palin'
        >
          {/* submit button */}
          <button className='submit-contact' type='submit'>
            <i className='far fa-paper-plane'></i>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
