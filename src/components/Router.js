import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
// import Users from '../Users.js';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path='/about' component={About} />
        {/* <Route exact path='/users' component={users}>
        </Route> */}
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </>
  );
}
export default Router;
