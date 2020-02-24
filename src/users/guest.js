import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <div className='Guest-Container'>
        {this.props.text}
        <p>hola from guest component.</p>
      </div>
    );
  }
}
