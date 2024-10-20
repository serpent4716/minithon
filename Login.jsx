import React from 'react';

import './Login.css';
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h1>Log in to your Account</h1>
          <p>Welcome back! Select method to log in:</p>
          
          <div className="social-login">
            <button className="social-btn google">
              <i className="fa-brands fa-google"></i> Google
            </button>
            <button className="social-btn facebook">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                alt="Facebook" 
                className="icon"
              /> 
              Facebook
            </button>
          </div>
          
          <div className="or-line">
            <hr/><span>or continue with email</span><hr/>
          </div>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
            />
            
            <div className="checkbox-remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              
                Forgot Password?
              
            </div>
            
            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>
          
          <div className="create-account">
            <p>
              Don't have an account? {' '}
              Create an account
            </p>
          </div>
        </div>
      </div>
      
      <div className="login-right">
        <div className="illustration">
          <p className="illustration-text">
            Connect with experienced lawyers for legal guidance. 
            Simplify your case with a team of experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;