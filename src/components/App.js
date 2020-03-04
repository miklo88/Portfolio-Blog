import React, { Component } from "react";
// REDUX
import { connect } from "react-redux";
import { addGuest } from "../redux/actions/guestActions";
// imported local files
import Nav from "../components/nav";
import Routes from "../router/routes";
import AddGuest from "../users/guestProfile";
import GuestList from "../users/guestList";

import "../styles/App.scss";

class App extends Component {
  render() {
    const { dispatch, visibleGuests } = this.props;

    return (
      <div className='App'>
        <Nav />
        <Routes />
        {/* moving 2 lines below comment to a component.*/}
        <AddGuest onAddClick={text => dispatch(addGuest(text))} />
        <GuestList guests={visibleGuests} />
      </div>
    );
  }
}
function select(state) {
  return {
    visibleGuests: state.guests
  };
}

export default connect(select)(App);
