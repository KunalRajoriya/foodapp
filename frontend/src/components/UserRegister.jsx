import React from 'react';
import { Link } from 'react-router-dom';
import '../theme.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response= await axios.post("http://localhost:3000/api/auth/user/register", {
        fullname,   
        email,
        password
    },{
        withCredentials: true
    })
    
    console.log(response.data);

    navigate("/")

  };

  return (
    <div className="container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>


          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/user/login">Sign in</Link>
        </div>

        <div className="divider">or</div>

        <div className="auth-footer">
          Are you a partner?{' '}
          <Link to="/food-partner/register">Register as Partner</Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;