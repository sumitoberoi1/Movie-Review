import React from "react";

import { withFirebase } from "../../Firebase";

const SignOutButton = ({ firebase }) => (
<<<<<<< HEAD
  <button
    className="nav-link btn btn-link"
    type="button"
    onClick={firebase.signOut}
  >
=======
  <button type="button" onClick={firebase.signOut}>
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
