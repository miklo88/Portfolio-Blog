import React, { useState } from "react";
// STYLES
import "../styles/Login.scss";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <div className='Login-Component'>
      <h1 className='Page-Title'>Login</h1>
      <form className='Login-Form' onSubmit={useState.value}>
        <label className='Input-Label'>
          email:
          <input
            className='Input-Field'
            type='text'
            // name='email'
            value=''
            onChange={email}
          />
        </label>
        <label className='Input-Label'>
          password:
          <input
            className='Input-Field'
            type='text'
            // name='password'
            value=''
            onChange={password}
          />
        </label>
        <label className='Input-Label'>
          <input
            className='Input-Field'
            type='submit'
            name='password'
            value=''
            onChange={(() => setEmail, setPassword)}
          />
          Submit
        </label>
      </form>
    </div>
  );
};

export { Login };
