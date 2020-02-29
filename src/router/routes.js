import React from "react";
// depencies
import { Route, Switch } from "react-router-dom";
// separate route files being imported
// import Login from "../login/login";
import RegisterForm from "../register/registerForm";
import { About } from "../components/about";
import { Design } from "../components/design";
// import { Photos } from "../components/photos";
// stylez jeje

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={RegisterForm} />
        <Route path='/about' component={About} />
        {/* <Route path='/photos' component={Photos} /> */}
        <Route path='/design' component={Design} />
      </Switch>
    </>
  );
};

export default Routes;
