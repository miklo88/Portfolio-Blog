import React, { useState } from "react";
// STYLES
import "../styles/Login.scss";

const Login = () => {
  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("test123");

  return (
    <div className='Login-Component'>
      <h1 className='Page-Title'>Login</h1>
      <form className='Login-Form' onSubmit={useState.value}>
        <label className='Input-Label'>
          email:
          <input
            className='Input-Field'
            name='email'
            value=''
            onChange={email}
          />
        </label>
        <label className='Input-Label'>
          password:
          <input
            className='Input-Field'
            name='password'
            value=''
            onChange={password}
          />
        </label>
        <button
          className='Button-Label'
          onClick={(() => setEmail, setPassword)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export { Login };
