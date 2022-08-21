import React from "react";
import "./Signup.css";
import { useState } from "react";
import { app, auth, firebaseAuth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();

  return (
    <div className="Signup">
      <div className="Signup_form">
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
          type="text"
          placeholder="Name"
          className="user_email"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

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
          placeholder="Password"
          className="user_password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div style={{ textAlign: "center", color: "red" }}> {error}</div>
        <button
          className="create_account_btn"
          onClick={() => {
            if (!email || !password) {
              setError("enter email and password");
              return;
            }
            firebaseAuth
              .createUserWithEmailAndPassword(auth, email, password)
              .then((res) => {
                toast({
                  title: "User created successfully",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              })
              .catch((err) => {
                switch (err.code) {
                  case "auth/email-already-in-use":
                    setError("Email id already exsists");
                    break;
                  case "auth/invalid-email":
                    setError("invalid email");
                    break;
                  case "auth/weak-password":
                    setError("Weak Password");
                    break;
                }
              });
          }}
        >
          Create account
        </button>
        <div className="Signup_detail">
          <div className="Already_account">
            Already have an account?
            <a className="login_account" href="/">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
