import React, { useState } from 'react';
import './LoginPopup.css';
import wrong_icon from '../../assets/wrong_icon.png';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-header'>
          <h1>Welcome to Oryve</h1>
        </div>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={wrong_icon} alt="Close" />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? null : <input type='text' placeholder='Your Name' required />}
          <input type='email' placeholder='Your Email' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p>Create a New Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an Account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;
