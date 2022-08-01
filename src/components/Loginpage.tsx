import React from "react";
import "./Loginpage.css";

const Loginpage = () => {
  return (
    <div className="loginpage">
      <form className="login_form">
        <button className="Google_btn">Continue with Google</button>
        <div className="or"> or </div>
        <input type="email" placeholder="Email" className="user_email" />
        <input
          type="password"
          placeholder="Password"
          className="user_password"
        />
        <button className="login_btn">Log in</button>
        <div>Log in with SAML SSO</div>
        <div>Forgot password?</div>
        <div>
          No account? <a href="">Create one</a>
        </div>
      </form>
    </div>
  );
};

export default Loginpage;
