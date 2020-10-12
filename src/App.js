import React from "react";
import Nav from "./components/nav/Nav";
import Whiteboard from "./whiteboard/Whiteboard";
import Router from "./components/router/Router";
// import Footer from "./components/nav/Footer";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Router />
      <Whiteboard />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
