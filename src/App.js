import React from "react";
import Nav from "./components/nav/nav.js";
import Router from "./components/router/router.js";
import Footer from "./components/nav/footer.js";

import "./app.scss";

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
