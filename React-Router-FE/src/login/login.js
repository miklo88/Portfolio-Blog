import React from "react";
// STYLES
import "../styles/Login.scss";

const Login = () => {
  return (
    <div className='Login-Component'>
      <h1 className='Page-Title'>Login</h1>
      <form className='Login-Form'>
        <label className='Input-Label'>
          email:
          <input id='email' type='text' text='email' />
        </label>
        <label className='Input-Label'>
          password:
          <input id='password' type='text' text='password' />
        </label>
        <label className='Input-Label'>
          submit:
          <input type='submit' value='submit' />
        </label>
      </form>
    </div>
  );
};

export { Login };
