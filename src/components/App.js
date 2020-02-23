import React from "react";
// imported local files
import Nav from "../components/nav";
import Routes from "../router/routes";
import "../styles/App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes />
    </div>
  );
}
export default App;
