import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// import components about, contact, home
import Home from "../home";
import About from "../about";
import Contact from "../contact";

import "./Nav-Router.scss";

function NavRouter() {
  return (
    <BrowserRouter>
      <div className='Nav'>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default NavRouter;
