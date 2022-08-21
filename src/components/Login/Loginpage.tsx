import React, { useState } from "react";
import "./Loginpage.css";
import { auth, firebaseAuth } from "../../Firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const clearErrors = () => {
    setError("");
  };

  return (
    <div className="loginpage">
      <div className="login_form">
        <button
          className="Google_btn"
          onClick={() => {
            const provider = new firebaseAuth.GoogleAuthProvider();
            const result = firebaseAuth.signInWithPopup(
              firebaseAuth.getAuth(),
              provider
            );
            console.log(result);
          }}
        >
          <img
            src="images/download.png"
            width="20px"
            height={20}
            style={{ marginRight: "40px" }}
          ></img>
          <div>Continue with Google</div>
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
        <div style={{ textAlign: "center", color: "red" }}> {error}</div>
        <button
          className="login_btn"
          onClick={() => {
            clearErrors();
            if (!email || !password) {
              setError("enter email and password");
              return;
            }
            firebaseAuth
              .signInWithEmailAndPassword(auth, email, password)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
                switch (err.code) {
                  case "auth/invalid-email":
                    setError("invalid email");
                    break;
                  case "auth/user-disabled":
                    setError("User disabled");
                    break;
                  case "auth/user-not-found":
                    setError("User not found");
                    break;
                  case "auth/wrong-password":
                    setError("Incorrect Password");
                    break;
                }
              });
          }}
        >
          Log in
        </button>
        <div className="login_detail">
          <a href="/Forget" className="forgot_pass">
            Forgot password?
          </a>
          <div className="No_account">
            No account?
            <a
              className="create_one"
              onClick={() => {
                nav("/Signup");
              }}
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
