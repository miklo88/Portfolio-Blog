import React from "react";
// depencies
import { Route, Switch } from "react-router-dom";
// separate route files being imported
import RegisterForm from "../register/registerForm";
import { About } from "../components/about";
import { Design } from "../components/design";
import Blog from "../blog/blog";
// stylez jeje

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={RegisterForm} />
        <Route path='/about' component={About} />
        {/* <Route path='/photos' component={Photos} /> */}
        <Route path='/design' component={Design} />
        <Route path='/blog' render={Blog} />
      </Switch>
    </>
  );
};

export default Routes;
// import { Photos } from "../components/photos";
// import Login from "../login/login";
