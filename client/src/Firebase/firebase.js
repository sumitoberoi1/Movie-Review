import app from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.createUserWithEmailAndPassword = this.createUserWithEmailAndPassword.bind(
      this
    );
    this.signInWithEmailAndPassword = this.signInWithEmailAndPassword.bind(
      this
    );
    this.signOut = this.signOut.bind(this);
    this.signWithGmail = this.signWithGmail.bind(this);
  }
  createUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  signInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  signOut() {
    return this.auth.signOut();
  }
  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
  passwordUpdate(password) {
    return this.auth.currentUser.updatePassword(password);
  }
  signWithGmail() {
    return this.auth.signInWithPopup(this.googleProvider);
  }
}

export default Firebase;
