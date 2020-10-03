import React from "react";
import Nav from "./components/nav/Nav";
// import Whiteboard from "./whiteboard/Whiteboard";
import Router from "./components/router/Router";
import Footer from "./components/nav/Footer";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      {/* <Whiteboard /> */}
      <Router />
      <Footer />
    </div>
  );
}
export default App;
