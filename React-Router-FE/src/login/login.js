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
          <input className='Input-Field' type='text' text='email' />
        </label>
        <label className='Input-Label'>
          password:
          <input className='Input-Field' type='text' text='password' />
        </label>
        <label className='Input-Label'>
          <input className='Input-Field' type='submit' value='Submit' />
        </label>
      </form>
    </div>
  );
};

export { Login };
