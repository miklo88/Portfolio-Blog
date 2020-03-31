import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Signup.scss";
const Signup = () => {
  // export const Signup = () => {
  return (
    <div className='signup-container'>
      <form className='singup-form' action=''>
        <label className='input-label'>
          First Name:
          <input className='input' type='text' placeholder='Carlitos' />
        </label>
        <label className='input-label'>
          Last Name:
          <input className='input' type='text' placeholder='Redding' />
        </label>
        <label className='input-label'>
          Username:
          <input className='input' type='text' placeholder='Miklo' />
        </label>
        <label className='input-label'>
          Email:
          <input
            className='input'
            type='text'
            placeholder='miklo.concepcion@gmail.com'
          />
        </label>
        <label className='input-label'>
          Password:
          <input className='input' type='text' placeholder='Password' />
        </label>
        <input type='submit' value='submit' />
      </form>
      <p>Already a user?</p>
      <Link to='/login'>Login</Link>
    </div>
  );
};
export default Signup;
// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Signup);
