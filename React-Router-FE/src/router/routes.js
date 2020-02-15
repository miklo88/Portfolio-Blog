import React from "react";
// depencies
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// separate route files being imported
import { One } from "../components/one";
import { Two } from "../components/two";
import { Three } from "../components/three";
import { Four } from "../components/four";
// stylez jeje
import "./Routes.scss";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className='Routes-Container'>
        <h1>Hola Bienvendidios!! Welcome to my React-Router!</h1>
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
