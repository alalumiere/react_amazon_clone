import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://static.wikia.nocookie.net/logopedia/images/f/fd/Amazon.svg/revision/latest/scale-to-width-down/1000?cb=20200604050112"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__title">Sign In</h1>
        <form action="">
          <h5 className="login__subTitle">Email</h5>
          <input
            className="login__inputs"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className="login__subTitle">Password</h5>
          <input
            className="login__inputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
          <p className="login__text">
            By singing in you agree to this AMAZON FAKE CLONE'S Conditions of
            Use & Sale. Please see our Privacy Notice, our Cookies Notice and
            out Interest-Based Ads Notice.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon Clone Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
