import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  // export const Signup = () => {
  return (
    <>
      {/* // <div className='signup-container'> */}
      <form className='signup-form'>
        <label className='input-label'>First Name:</label>
        <input className='input' type='text' placeholder='Carlitos' />

        <label className='input-label'>Last Name:</label>
        <input className='input' type='text' placeholder='Redding' />

        <label className='input-label'>Username:</label>
        <input className='input' type='text' placeholder='Miklo' />

        <label className='input-label'>Email:</label>
        <input
          className='input'
          type='text'
          placeholder='miklo.concepcion@gmail.com'
        />

        <label className='input-label'>Password:</label>
        <input className='input' type='text' placeholder='Password' />

        <input className='submit-input' type='submit' value='submit' />
      </form>
      <div className='to-login'>
        <p>Already a user?</p>
        <Link to='/login'>Login</Link>
      </div>
    </>
    // {/* </div> */}
  );
};
export default Signup;
// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Signup);
