import React from "react";
// depencies
import { Route, Link, Switch } from "react-router-dom";
// separate route files being imported
import { Login } from "../login/login";
import { About } from "../components/about";
import { Design } from "../components/design";
import { Photos } from "../components/photos";
// stylez jeje
import "../styles/Routes.scss";

const Routes = () => {
  return (
    <>
      <div className='Routes-Container'>
        <h1 className='Main-Title'>
          Carl Redding<br></br>Visual Design<br></br>Chicago, IL
        </h1>
        <ul className='Nav-Container'>
          <li className='Nav-Link'>
            <Link className='Link' to='/login'>
              Login
            </Link>
          </li>
          <li className='Nav-Link'>
            <Link className='Link' to='/about'>
              About
            </Link>
          </li>

          <li className='Nav-Link'>
            <Link className='Link' to='/photos'>
              Photography
            </Link>
          </li>

          <li className='Nav-Link'>
            <Link className='Link' to='/design'>
              Design
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/about' component={About} />
        <Route path='/photos' component={Photos} />
        <Route path='/design' component={Design} />
      </Switch>
    </>
  );
};

export default Routes;
