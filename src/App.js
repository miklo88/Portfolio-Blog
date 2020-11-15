import React from "react";
import Nav from "./components/nav/Nav";
// import Footer from "./whiteboard/Whiteboard";
import Router from "./components/router/Router";
import Footer from "./components/nav/Footer";
import userOne from "./components/nav/User";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Router />
      <Footer
        name={userOne.name}
        username={userOne.username}
        age={userOne.age}
        value={userOne.value}
        password={userOne.password}
      />
    </div>
  );
}
export default App;
