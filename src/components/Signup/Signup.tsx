import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="Signup">
      <form className="Signup_form">
        <button className="Google_btn">Continue with Google</button>
        <div className="or"> or </div>
        <input type="email" placeholder="Email" className="user_email" />
        <input
          type="password"
          placeholder="Password"
          className="user_password"
        />
        <button className="create_account_btn">Create account</button>
        <div className="Signup_detail">
          <div className="Already_account">
            Already have an account?
            <a href="/" className="login_account">
              Log in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
