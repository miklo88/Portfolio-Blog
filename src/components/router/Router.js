import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/About";
import Landing from "../landing/Landing";
import Design from "../design/Design";
import Contact from "../forms/Contact";

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
