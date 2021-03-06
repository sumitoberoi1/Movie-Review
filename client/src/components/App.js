import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import SignupPage from "./Signup";
import SignInPage from "./SignIn";
import * as ROUTES from "../constants/routes";
import { withAuthentication } from "../Session";
import PasswordChange from "./PasswordChange";
import PasswordForgetPage from "./ForgetPassword";
import Home from "./Home";
import MovieDescription from "./MovieDescription";
import UserProfile from "./UserProfile";
import NoResultFound from "../NoResultFound";

/**
 * Main entrypoint for the client-side applicaiton.
 */
const App = props => (
  <Router>
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Navigation />
    </div>
    <Switch>
      {props.firebase &&
      props.firebase.auth &&
      props.firebase.auth.currentUser ? (
        <Route exact path={ROUTES.LANDING} component={Home} />
      ) : (
        <Route exact path={ROUTES.LANDING} component={SignupPage} />
      )}
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.USER_PROFILE} component={UserProfile} />
      <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
      <Route exact path={ROUTES.SIGNIN} component={SignInPage} />
      <Route exact path={ROUTES.CHANGE_PASSWORD} component={PasswordChange} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.SPECIFIC_MOVIE} component={MovieDescription} />
      <Route component={NoResultFound} />
    </Switch>
  </Router>
);

export default withAuthentication(App);
