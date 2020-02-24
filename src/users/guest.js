import React from "react";
import GuestProfile from "./guestProfile";

class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuest: {
        email: "email@email.com",
        username: "MOJOJOJO"
      }
    };
  }

  render() {
    return (
      <div className='Profile-Component'>
        <GuestProfile newGuest={this.state.newGuest} />
      </div>
    );
  }
}
export default Guest;
