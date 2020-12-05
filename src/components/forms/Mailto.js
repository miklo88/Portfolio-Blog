import React from "react";
import "./Mailto.scss";
function Mailto({ email, subject, body, ...props }) {
  return (
    <div className='mail-button'>
      <p className='hi'>Say hi!</p>
      <a
        className='submit-contact'
        href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
      >
        <i className='far fa-paper-plane'>{props.children}</i>
      </a>
    </div>
  );
}
export default Mailto;
