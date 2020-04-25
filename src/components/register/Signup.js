import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    function handleSubmit(submit) {
      setFirstName(submit.firstName);
      setLastName(submit.lastName);
      setUsername(submit.userName);
      setEmail(submit.email);
      setPassword(submit.password);
    }
  });

  return (
    <>
      <form className='signup-form'>
        <label className='input-label'>First Name:</label>
        <input className='input-field' type='text' placeholder='First Name' />
        <label className='input-label'>Last Name:</label>
        <input className='input-field' type='text' placeholder='Last Name' />
        <label className='input-label'>Username:</label>
        <input className='input-field' type='text' placeholder='Username' />
        <label className='input-label'>Email:</label>
        <input
          className='input-field'
          type='text'
          placeholder='Email@gmail.com'
        />
        <label className='input-label'>Password:</label>
        <input className='input-field' type='text' placeholder='Password' />
        <button className='submit-btn' type='submit' value='submit'>
          Submit
        </button>
        <div className='link-to-login'>
          <p className='to-login'>Already a user?</p>
          <Link className='login-link' to='/login'>
            Login
          </Link>
        </div>
      </form>
    </>
  );
};
export default Signup;
// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Signup);
