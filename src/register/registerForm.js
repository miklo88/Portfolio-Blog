import React, { Component } from "react";
import "../styles/Login.scss";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acceptedTerms: false,
      email: "",
      username: ""
    };

}
  updateCheckbox(checked) {
    this.setState({
      acceptedTerms: checked
    });
  }

  updateEmail(value) {
    this.setState({
      email: value
    });
}
  updateUsername(value) {
    this.setState({
        username: value
    });
}
}


submit() {

}
  render() {
    return (
      <div className='Login-Component'>
        <form className='Login-Form'>
          <h1 className='Page-Title'>Login</h1>
          <label className='Input-Label'>
            email
            <input
              className='Input-Field'
              type='email'
              onChange={event => {
                this.updateEmail(event.target.value);
              }}
              value={this.state.email}
            />
          </label>
          <label className='Input-Label'>
            username
            <input
              className='Input-Field'
              type='username'
              onChange={event => {
                this.updateUsername(event.target.value);
              }}
              value={this.state.username}
            />
          </label>
          <label className='Input-Label'>
            <input
              className='Input-Field'
              type='checkbox'
              checked={this.state.acceptedTerms}
              onChange={event => {
                this.updateCheckbox(event.target.checked);
              }}
            />
          </label>
          <button
            onClick={() => {
              this.submit();
            }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }

