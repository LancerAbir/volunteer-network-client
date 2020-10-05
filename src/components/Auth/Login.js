import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../images/logos/Group 1329.png";
import googleLogo from "../../images/logos/Group 573.png";
import { UserContext } from "../../App";

//** Fire Base */
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";

//** Login Manager */
import { googleSignINHandler } from "./LoginManager.js";

const Login = () => {
  //** Data Come Form Context API */
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //** Firebase Config */
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  //** useHistory & useLocation for state location */
  let history = useHistory();
  let location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // //** useState Hook */
  const [user, setUser] = useState({
    isSignedIn: false,
    fastName: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    successful: false,
  });

  //** Google SignIN Handler */
  const googleSignIn = () => {
    googleSignINHandler()
      .then((res) => {
        setUser(res);
        setLoggedInUser(res);
        storeAuthToken()
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        setUser(error.message);
      });
  };


  //** JWT Firebase  */
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      sessionStorage.setItem('token', idToken)
      history.replace(from);
      // Send token to your backend via HTTPS
      // ...
    }).catch(function(error) {
      // Handle error
    });
  }




  return (
    <div className="auth-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 offset-md-3">
            {/* <!--  Root Logo --!> */}
            <div className="root-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {/* <!--  Login Box --!> */}
            <div className="login-box">
              <h2> Login With </h2>
              {/* <!--  Google SignIN --!> */}
              <button onClick={googleSignIn} className="btn">
                <img src={googleLogo} alt="" /> Continue with Google
              </button>
              <p>
                Don’ t have an account ? <span> Create an account </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
