import React from "react";
import "./Mailto.scss";
function Mailto({ email, subject, body, ...props }) {
  return (
    <a
      className='submit-contact'
      href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
    >
      <i className='far fa-paper-plane'>{props.children}</i>
    </a>
  );
}
export default Mailto;
