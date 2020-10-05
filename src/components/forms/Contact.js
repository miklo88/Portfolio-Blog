import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import "./Contact.scss";

//contact popupcontainer displays popup message to user
const Contact = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ContactForm />
        </React.Fragment>,
        document.body
      )
    : null;

export default Contact;
