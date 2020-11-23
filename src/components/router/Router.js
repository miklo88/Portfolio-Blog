import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/about.js";
import Landing from "../landing/landing.js";
import Design from "../design/design.js";
import Contact from "../forms/contact.js";

function Router() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
}
export default Router;
