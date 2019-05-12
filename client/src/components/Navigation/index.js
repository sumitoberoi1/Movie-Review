import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../Signout";
import { AuthUserContext } from "../../Session";
<<<<<<< HEAD
const Navigation = () => (
=======
const Navigation = ({ authUser }) => (
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
<<<<<<< HEAD
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to={ROUTES.LANDING}>
      Next Ticket
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span>
        <i className="fa fa-align-justify" />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={ROUTES.CHANGE_PASSWORD} className="nav-link">
            Update Password
          </Link>
        </li>
        <li className="nav-item">
          <SignOutButton />
        </li>
      </ul>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to={ROUTES.LANDING}>
      Next Ticket
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span>
        <i className="fa fa-align-justify" />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li>
          <Link to={ROUTES.SIGNUP} className="nav-link">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.SIGNIN} className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.PASSWORD_FORGET} className="nav-link">
            ForgotPassword
          </Link>
        </li>
      </ul>
    </div>
  </nav>
=======
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.MOVIES}>Movies</Link>
    </li>
    <li>
      <Link to={ROUTES.CHANGE_PASSWORD}>Update Password</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGNIN}>Login</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGNUP}>Sign Up</Link>
    </li>
    <li>
      <Link to={ROUTES.PASSWORD_FORGET}>ForgotPassword</Link>
    </li>
  </ul>
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
);

export default Navigation;
