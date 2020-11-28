import React from "react";
import Nav from "./components/nav/Nav.js";
import Router from "./components/router/Router.js";
import Footer from "./components/nav/Footer.js";

import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}
export default App;
