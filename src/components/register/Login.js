import React from "react";
import { connect } from "react-redux";
// import "./Login.scss";

const Login = () => {
  return (
    <div className='login-container'>
      <form className='login-form'>
        <label className='form-label'>
          Email:
          <input className='login-input' type='text' />
        </label>
        <label>
          Password:
          <input className='login-input' type='text' />
        </label>
      </form>
    </div>
  );
};
export default Login;

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
