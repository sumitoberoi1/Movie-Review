import React, { Component } from "react";
import { withFirebase } from "../../Firebase";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
 
 import Signup from "../Signup";
 import SignIn from "../SignIn";
 //import "./index.css"
 //import logo from './logo.jpg'; 


 /*var sectionStyle = {
  width: "20%",
  height: "100px",
  backgroundImage: `url(${logo})`,
  backgroundPosition:'center',
  backgrounfSize:'cover',
  backgroundRepeat:'no-repeat'
};*/

/*<img src={logo} alt="logo"/>
<section style={ sectionStyle }></section>*/
class Landing extends Component {
  
    
  render() {
    
    return (
        <HashRouter>
        <div >
        
         
          
       
          <h1>Introduction</h1>
          <p>Hello, welcome to the Movie recommendation Website. We will recommend movies to you based on sentiments provided by the you,
          you will need to create an account and log into the application where you can assemble a list of movies you 
          have watched and like.The application will then use this list to recommend movies that users may wish to watch next. 
          
          </p>
          <p>
          For ease of use, you could also use a speech recognition engine to search for movies to watch or add new ones. 
          </p>

          <p>you could click on signup page to sign up, and click sign in to login</p>

          

          
          <ul className = "header">
          
          <li><NavLink to= "/signup">SignUp</NavLink></li>
          <li><NavLink to= "/signin">Login</NavLink></li>
          </ul>

          <div className="content">
          
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={SignIn}/>
          </div>
        </div>

        </HashRouter>
    
    );
  }
}

export default (Landing);
