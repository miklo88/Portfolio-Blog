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
      <form className='Login-Form' onSubmit={handleSubmit}>
        <h1 className='Page-Title'>Login</h1>
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

        <button
          className='Login-button'
          disabled={!validateForm()}
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
}

// export { Login };
