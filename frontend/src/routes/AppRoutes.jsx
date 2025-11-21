import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegister from '../components/UserRegister';
import UserLogin from '../components/UserLogin';
import PartnerRegister from '../components/PartnerRegister';
import PartnerLogin from '../components/PartnerLogin';
import Home from '../general/Home';
import CreateFood from '../general/CreateFood';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<PartnerRegister />} />
        <Route path="/food-partner/login" element={<PartnerLogin />} />
        <Route path = "/" element = {<Home />} />
        <Route path = "/create-food" element = {<CreateFood />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;