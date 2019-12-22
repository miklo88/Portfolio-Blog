import React from "react";
// depencies
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// separate route files being imported
import { One } from "./one";
import { Two } from "./two";
import { Three } from "./three";
import { Four } from "./four";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <p>Hola Bienvendidios!! Welcome to my React-Router!</p>
      </div>
      <ul>
        <li>
          <Link to='/one'>Page One</Link>
        </li>
        <li>
          <Link to='/two'>Page Two</Link>
        </li>
        <li>
          <Link to='/three'>Page Three</Link>
        </li>
        <li>
          <Link to='/four'>Page Four</Link>
        </li>
      </ul>

      <Switch>
        <Route path='/one' component={One} />
        <Route path='/two' component={Two} />
        <Route path='/three' component={Three} />
        <Route path='/four' component={Four} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
