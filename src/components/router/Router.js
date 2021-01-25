import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/About.js";
import Landing from "../landing/Landing.js";
import Design from "../design/Design.js";
import GitHub from "../github/GitHub.js";
import Contact from "../forms/Contact.js";
import MarshallsLanding from "../design/marshalls_landing/MarshallsLanding.js";
import Photography from "../design/photography/Photography.js";
import Illustration from "../design/illustration/Illustration.js";
import Eat from "../design/marshalls_landing/Eat.js";
import Bar from "../design/marshalls_landing/Bar.js";
import Coffee from "../design/marshalls_landing/Coffee.js";
import Events from "../design/marshalls_landing/Events.js";

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
        <Route exact path='/eat' component={Eat} />
        <Route exact path='/bar' component={Bar} />
        <Route exact path='/coffee' component={Coffee} />
        <Route exact path='/events' component={Events} />
      </Switch>
    </>
  );
}
export default Router;
