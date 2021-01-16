import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/About.js";
import Landing from "../landing/Landing.js";
import Design from "../design/Design.js";
import GitHub from "../github/GitHub.js";
import Contact from "../forms/Contact.js";

function Router() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/github' component={GitHub} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
}
export default Router;
