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
        <Route exact path='/landing' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/design' component={Design} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </>
  );
}
export default Router;
