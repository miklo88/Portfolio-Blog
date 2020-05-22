import React from "react";
import "../contact/contact.scss";
// import left from "../../stockPhotos/PIv2.1.jpg";
// import right from "../../stockPhotos/WEBSITE.png";

const ContactForm = () => {
  return (
    <div id='contact-container' className='contact-container'>
      <h1 className='contact-title'>Let's create something together.</h1>
      <form
        className='contact-form'
        action='mailto:credding07@gmail.com'
        method='post'
        encType='text/palin'
      >
        <div className='left-img'>img-mock</div>
        {/* <img className='left-img' src={left} alt='placement-holder' /> */}
        <input className='name-input' type='text' placeholder='Name' />
        <input className='email-input' type='email' placeholder='Email' />
        <input className='message-input' placeholder='Message' />

        <input type='submit' className='submit-contact' value='Send' />
        {/* <img className='right-img' src={right} alt='placement-holder' /> */}
        <div className='right-img'>img-mock</div>
      </form>
    </div>
  );
};
export default ContactForm;
