import React, { Component } from "react";
import Guest from "./guest";

export default class GuestList extends Component {
  render() {
    return (
      <div className='GuestList-Container'>
        {this.props.guests.map(guest => (
          <Guest key={guest.id} {...guest} />
        ))}
      </div>
    );
  }
}
