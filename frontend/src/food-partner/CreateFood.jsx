import React from 'react'
import Profile from './Profile';
import {Link} from 'react-router-dom';

const CreateFood = () => {
  return (
    <div>
      create food
      <Link to="/food-partner/Profile">Profile</Link>
    </div>
  )
}

export default CreateFood
