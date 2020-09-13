import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/about";
import Landing from "../landing/Landing";
import Blog from "../blog/blog";
import Projects from "../projects/projects";
import ContactForm from "../forms/ContactForm";
// import Signup from "../register/Signup";
// import Login from "../register/Login";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contactform' component={ContactForm} />
        {/* <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} /> */}
      </Switch>
    </>
  );
};
export default Router;
