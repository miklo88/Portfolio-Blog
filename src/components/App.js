import React from "react";
// imported local files
import Nav from "../components/nav";
import Routes from "../router/routes";
import Guest from "../users/guest";
import Clock from "../clock/clock";

import "../styles/App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes />
      <Clock />
      <Guest />
    </div>
  );
}
export default App;
