import React, { Component } from "react";

import { withFirebase } from "../../Firebase";
import { withAuthorization } from "../../Session";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .passwordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
<<<<<<< HEAD
      <div className="col-md-8 offset-md-2 mt-5">
          <form className="mt-4 mb-5" onSubmit={this.onSubmit}>
=======
      <form onSubmit={this.onSubmit}>
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
<<<<<<< HEAD
          class="form-control form-control-lg"
        />
        <br />
=======
        />
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
<<<<<<< HEAD
          class="form-control form-control-lg"
        />
        <br />
        <button className="btn btn-primary mb-2 mt-3 form-control form-control-lg" disabled={isInvalid} type="submit">
=======
        />
        <button disabled={isInvalid} type="submit">
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
<<<<<<< HEAD

      </div>
      
=======
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
    );
  }
}

export default withAuthorization()(withFirebase(PasswordChangeForm));
