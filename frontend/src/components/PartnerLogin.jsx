import React from 'react';
import { Link } from 'react-router-dom';
import '../theme.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post("http://localhost:3000/api/auth/foodpartner/login", {
        email,
        password
  },{
    withCredentials: true
  }).then((response) => { 
      console.log(response.data);
      navigate("/create-food");
  })
  .catch(error =>{
      console.log("there was an error logging in", error);
  });

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