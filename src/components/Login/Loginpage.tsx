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
