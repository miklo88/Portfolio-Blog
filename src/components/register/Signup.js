import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    };
  }

  registerUser() {
    console.log("this.state", this.state);
  }

  render() {
    return (
      <div>
        <form className='signup-form'>
          <label className='input-label'>First Name:</label>
          <input
            className='input-field'
            type='text'
            onChange={(event) =>
              this.setState({ firstName: event.target.value })
            }
            placeholder='First Name'
          />
          <label className='input-label'>Last Name:</label>
          <input
            className='input-field'
            type='text'
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
            placeholder='Last Name'
          />
          <label className='input-label'>Username:</label>
          <input
            className='input-field'
            type='text'
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
            placeholder='Username'
          />
          <label className='input-label'>Email:</label>
          <input
            className='input-field'
            type='text'
            onChange={(event) => this.setState({ email: event.target.value })}
            placeholder='Email@email.com'
          />
          <label className='input-label'>Password:</label>
          <input
            className='input-field'
            type='password'
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            placeholder='Password'
          />
          <button
            className='submit-btn'
            type='button'
            onClick={() => this.registerUser()}
          >
            Sign Up
          </button>

          {/* to login component if user is already registered. */}
          <div className='link-to-login'>
            <p className='to-login'>Already a user?</p>
            <Link className='login-link' to='/login'>
              Login
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
// export default connect()(SignUp);

export default SignUp;
