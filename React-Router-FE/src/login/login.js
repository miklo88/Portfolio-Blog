import React, { useState } from "react";
// STYLES
import "../styles/Login.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='Login-Component'>
      <h1 className='Page-Title'>Login</h1>
      <form className='Login-Form' onSubmit={handleSubmit}>
        <label className='Input-Label'>
          email:
          <input
            className='Input-Field'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className='Input-Label'>
          password:
          <input
            className='Input-Field'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label className='Input-Label'>
          <input
            className='Input-Field'
            type='submit'
            onChange={e => !validateForm()}
          />
        </label>
      </form>
    </div>
  );
}

export { Login };
