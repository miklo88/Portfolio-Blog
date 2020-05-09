import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "../forms/ContactForm";
import "./contact.scss";

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
