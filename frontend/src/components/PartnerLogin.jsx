import React from 'react';
import { Link } from 'react-router-dom';
import '../theme.css';

const PartnerLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Partner Login</h1>
          <p>Access your partner dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your business email"
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
          Not a partner yet?{' '}
          <Link to="/food-partner/register">Register as Partner</Link>
        </div>

        <div className="auth-footer" style={{ marginTop: '16px' }}>
          Looking to order food? <Link to="/user/login">User Login</Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogin;