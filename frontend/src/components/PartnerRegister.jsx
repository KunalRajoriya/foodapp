import React from 'react';
import { Link } from 'react-router-dom';
import '../theme.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const ownerName = e.target.ownerName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;

    axios.post("http://localhost:3000/api/auth/foodpartner/register", {
        name,
        ownerName,
        email,
        phone,
        address,
        password
    },{
        withCredentials: true
    }).then((response) => {
        console.log(response.data);
        navigate("/create-food");
    })
    .catch(error =>{
        console.log("there was an error registering", error);
    });
    
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
            <label htmlFor="name">Restaurant/Business Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter business name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              id="ownerName"
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