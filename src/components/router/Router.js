import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/About.js";
import Landing from "../landing/Landing.js";
import Design from "../design/Design.js";
import GitHub from "../github/GitHub.js";
import Contact from "../forms/Contact.js";
import MarshallsLanding from "../design/MarshallsLanding.js";
import Photography from "../design/Photography.js";
import Illustration from "../design/Illustration.js";

function Router() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/github' component={GitHub} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/marshallslanding' component={MarshallsLanding} />
        <Route exact path='/photography' component={Photography} />
        <Route exact path='/illustration' component={Illustration} />
      </Switch>
    </>
    
  );
}
export default Router;
