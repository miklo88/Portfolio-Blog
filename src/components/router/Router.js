import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/About";
import Landing from "../landing/Landing";
import Design from "../design/Design";
import Contact from "../forms/Contact";
import Footer from "../../whiteboard/Whiteboard";

function Router() {
  return (
    <>
      <Switch>
        <Route exact path='/landing' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/design' component={Design} />
        <Route path='/contact' component={Contact} />
        {/* footer experimentation */}
        <Route path='/landing/:id' children={<Footer />} />
        <Route path='about/:id' children={<Footer />} />
        <Route path='design/:id' children={<Footer />} />
        <Route path='contact/:id' children={<Footer />} />
      </Switch>
    </>
  );
}
export default Router;
