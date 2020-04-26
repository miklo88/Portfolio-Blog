import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about";
import Dashboard from "../landing/Dashboard";
import Signup from "../register/Signup";
import Login from "../register/Login";
// import Users from '../Users.js';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path='/about' component={About} />
        {/* <Route exact path='/users' component={users}>
        </Route> */}
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </>
  );
}
export default Router;
