import React from "react";
import * as CONSTANTS from "./Constants";
import { withFirebase } from "../../Firebase";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
<<<<<<< HEAD

const SignupPage = () => (
  <div className="container bg-light contentCenter w-50 rounded-lg">
=======
const SignupPage = () => (
  <div>
    <h1>Sign Up</h1>
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
    <SignUpForm />
  </div>
);

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userName: "",
      repeatPassword: "",
      error: null,
      message: null
    };
    this.onFormFieldChange = this.onFormFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFormFieldChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  async onSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();
<<<<<<< HEAD
    await this.props.firebase.createUserWithEmailAndPassword(email, password);
    try {
=======
    try {
      let authUser = await this.props.firebase.createUserWithEmailAndPassword(
        email,
        password
      );
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
      this.setState(() => {
        return {
          email: "",
          password: "",
          userName: "",
          repeatPassword: "",
          error: null,
          message: null
        };
      });
<<<<<<< HEAD
      this.props.history.push(ROUTES.LANDING);
=======
      this.props.history.push(ROUTES.MOVIES);
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
    } catch (e) {
      this.setState(() => {
        return {
          error: e
        };
      });
    }
  }

  render() {
    const {
      email,
      password,
      userName,
      repeatPassword,
      error,
      message
    } = this.state;
    const isInvalid =
      password !== repeatPassword ||
      password === "" ||
      repeatPassword === "" ||
      email === "" ||
      userName === "";
    return (
      <React.Fragment>
        {message && <p>{message}</p>}
<<<<<<< HEAD
        <div className="col-md-8 offset-md-2 mt-5">
          <h1 className="m-4 text-center">Welcome to Next Ticket</h1>
          <h3 className="m-5 text-center">
            Sign Up and start getting recommendations for movies based on the
            ones you have already have in your watch list
          </h3>
          <form onSubmit={this.onSubmit}>
            <label
              className="text-white sr-only"
              htmlFor={CONSTANTS.FORMFIELDUSERNAME}
            >
              Username:
            </label>
            <input
              type="text"
              name={CONSTANTS.FORMFIELDUSERNAME}
              id={CONSTANTS.FORMFIELDUSERNAME}
              placeholder="Enter UserName"
              value={userName}
              className="form-control form-control-lg mb-4"
              onChange={this.onFormFieldChange}
            />
            <label
              className="text-white sr-only"
              htmlFor={CONSTANTS.FORMFIELDEMAIL}
            >
              Email
            </label>
            <input
              type="text"
              name={CONSTANTS.FORMFIELDEMAIL}
              id={CONSTANTS.FORMFIELDEMAIL}
              placeholder="Enter Email"
              value={email}
              className="form-control form-control-lg mb-4"
              onChange={this.onFormFieldChange}
            />
            <label
              className="text-white sr-only"
              htmlFor={CONSTANTS.FORMFIELDPASSWORD}
            >
              Password
            </label>
            <input
              type="password"
              name={CONSTANTS.FORMFIELDPASSWORD}
              placeholder="Enter your password"
              id={CONSTANTS.FORMFIELDPASSWORD}
              value={password}
              className="form-control form-control-lg"
              onChange={this.onFormFieldChange}
            />
            <br />
            <label
              className="text-white sr-only"
              htmlFor={CONSTANTS.FORMFIELDREPEATPASSWORD}
            >
              Password
            </label>
            <input
              type="password"
              name={CONSTANTS.FORMFIELDREPEATPASSWORD}
              placeholder="Re-enter your password"
              id={CONSTANTS.FORMFIELDREPEATPASSWORD}
              value={repeatPassword}
              className="form-control form-control-lg"
              onChange={this.onFormFieldChange}
            />
            <br />
            <button
              className="btn btn-primary mb-5 mt-3 form-control form-control-lg"
              disabled={isInvalid}
              type="submit"
            >
              Sign Up
            </button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
=======
        <form onSubmit={this.onSubmit}>
          <label htmlFor={CONSTANTS.FORMFIELDUSERNAME}>Username:</label>
          <input
            type="text"
            name={CONSTANTS.FORMFIELDUSERNAME}
            id={CONSTANTS.FORMFIELDUSERNAME}
            placeholder="Enter UserName"
            value={userName}
            onChange={this.onFormFieldChange}
          />
          <label htmlFor={CONSTANTS.FORMFIELDEMAIL}>Email</label>
          <input
            type="text"
            name={CONSTANTS.FORMFIELDEMAIL}
            id={CONSTANTS.FORMFIELDEMAIL}
            placeholder="Enter Email"
            value={email}
            onChange={this.onFormFieldChange}
          />
          <label htmlFor={CONSTANTS.FORMFIELDPASSWORD}>Password</label>
          <input
            type="password"
            name={CONSTANTS.FORMFIELDPASSWORD}
            placeholder="Enter your password"
            id={CONSTANTS.FORMFIELDPASSWORD}
            value={password}
            onChange={this.onFormFieldChange}
          />
          <label htmlFor={CONSTANTS.FORMFIELDREPEATPASSWORD}>Password</label>
          <input
            type="password"
            name={CONSTANTS.FORMFIELDREPEATPASSWORD}
            placeholder="Enter your password"
            id={CONSTANTS.FORMFIELDREPEATPASSWORD}
            value={repeatPassword}
            onChange={this.onFormFieldChange}
          />
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </form>
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
      </React.Fragment>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);
export default SignupPage;
export { SignUpForm };
