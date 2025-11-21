import React from 'react';
import { Link } from 'react-router-dom';
import '../theme.css';

const PartnerRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Partner Registration</h1>
          <p>Join us as a food partner</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="restaurant-name">Restaurant/Business Name</label>
            <input
              type="text"
              id="restaurant-name"
              placeholder="Enter business name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="owner-name">Owner Name</label>
            <input
              type="text"
              id="owner-name"
              placeholder="Enter owner name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter business email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter contact number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Business Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter business address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Partner Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Register as Partner
          </button>
        </form>

        <div className="auth-footer">
          Already a partner? <Link to="/food-partner/login">Sign in</Link>
        </div>

        <div className="divider">or</div>

        <div className="auth-footer">
          Looking to order food? <Link to="/user/register">Register as User</Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegister;