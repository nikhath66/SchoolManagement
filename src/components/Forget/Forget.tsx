import React, { useState } from "react";
import { firebaseAuth, auth } from "../../Firebase/Firebase";
import "./Forget.css";
import { useToast } from "@chakra-ui/react";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const toast = useToast();
  return (
    <div className="Forget-main">
      <div className="Forget-container">
        <h3 className="Forget-heading">Enter your email to reset password</h3>
        <div
          style={{ color: "red", textAlign: "center", marginBottom: "10px" }}
        >
          {error}
        </div>
        <input
          className="Forget-reset-email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="Forget-button"
          onClick={() => {
            if (!email) {
              setError("Enter the Email-id");
              return;
            }
            firebaseAuth
              .sendPasswordResetEmail(auth, email)
              .then((res) => {
                toast({
                  title: "Email sent successfully",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              })
              .catch((err) => {
                switch (err.code) {
                  case "auth/user-not-found":
                    setError("User not found");
                    break;
                  case "auth/invalid-email":
                    setError("invalid email");
                    break;
                }
              });
          }}
        >
          Reset password
        </button>
        <a href="/" className="Forget-cancel">
          Cancel
        </a>
      </div>
    </div>
  );
};

export default Forget;
