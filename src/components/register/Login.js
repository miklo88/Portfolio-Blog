import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import "./Login.scss";

const Login = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <form
        className='login-form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className='form-label'>
          Email:
          <input
            className='input-field'
            type='email'
            onChange={(e) => setUserEmail({ email: e.target.value })}
            placeholder='Email@email.com'
          />
        </label>
        <label>
          Password:
          <input
            className='input-field'
            type='password'
            onChange={(e) => setUserPassword({ password: e.target.value })}
            placeholder='Password'
          />
        </label>
        <button className='login-btn' type='submit'>
          Login
        </button>
      </form>
      {/* to signup component if a new user */}
      <div className='link-to-signup'>
        <p className='to-signup'>New User?</p>
        <Link className='signup-link' to='/signup'>
          Sign Up
        </Link>
      </div>
    </>
  );
};
export default Login;

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
