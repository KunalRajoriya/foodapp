import React from 'react';
import { Link } from 'react-router-dom';
import '../theme.css';

const UserLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <a href="#">Forgot password?</a>
        </div>

        <div className="divider">or</div>

        <div className="auth-footer">
          Don't have an account? <Link to="/user/register">Sign up</Link>
        </div>

        <div className="auth-footer" style={{ marginTop: '16px' }}>
          Are you a partner? <Link to="/food-partner/login">Partner Login</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;