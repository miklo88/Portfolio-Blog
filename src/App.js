import React from "react";
import Nav from "./components/Nav";
import Router from "./components/Router";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Router />
      <p>Beinvenidos mi gente!</p>
      <Footer />
    </div>
  );
}
export default App;
