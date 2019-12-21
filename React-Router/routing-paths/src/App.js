import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { render } from "react-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <p>Hola Bienvendidios!! Welcome to my React-Router!</p>
      </div>
      <ul>
        <li>
          <Link to='/one'>One</Link>
        </li>
        <li>
          <Link to='/two'>Two</Link>
        </li>
        <li>
          <Link to='/three'>Three</Link>
        </li>
        <li>
          <Link to='/four'>Four</Link>
        </li>
      </ul>

      <Switch>
        <RouteWrapper path='/one' component={One} />
        <RouteWrapper path='/two' component={Two} />
        <RouteWrapper path='/three' component={Three} />
        <RouteWrapper path='/four' component={Four} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
