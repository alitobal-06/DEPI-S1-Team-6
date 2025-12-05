import React from "react";
import "../assets/login.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
    <Header />
    <div className="form-container">
      <div className="form-box">
        <h2>Welcome Back</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit" className="login-main-btn">
            Login
          </button>
          <a href="#" className="forgot">
            Forgot Password?
          </a>
          <p className="signup-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
  
}

export default Login;

   