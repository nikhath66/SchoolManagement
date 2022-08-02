import React, { useState } from "react";
import "./Loginpage.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginpage">
      <form className="login_form">
        <button
          className="Google_btn"
          onClick={() => {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Continue with Google
        </button>
        <div className="or"> or </div>
        <input
          type="email"
          placeholder="Email"
          className="user_email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          className="user_password"
        />
        <button
          className="login_btn"
          onClick={() =>
            createUserWithEmailAndPassword(auth, email, password)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              })
          }
        >
          Log in
        </button>
        <div className="login_detail">
          <a href="" className="forgot_pass">
            Forgot password?
          </a>
          <div className="No_account">
            No account?
            <a href="/Signup" className="create_one">
              Signup
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Loginpage;
