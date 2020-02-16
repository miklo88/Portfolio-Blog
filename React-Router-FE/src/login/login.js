import React from "react";
// STYLES
import "../styles/Login.scss";

const Login = () => {
  return (
    <div className='Login-Component'>
      <h1 className='Page-Title'>Login</h1>
      <form>
        <label>
          email:
          <input id='email' type='text' text='email' />
        </label>
        <label>
          password:
          <input id='password' type='text' text='password' />
        </label>
        <label>
          submit:
          <input type='submit' value='submit' />
        </label>
      </form>
    </div>
  );
};

export { Login };
