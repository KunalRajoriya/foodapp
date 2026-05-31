import React from 'react';
import './Profile.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const profile = () => {
  const{ id } = useParams();

  const[ profile, setProfile] = useState(null);
  const[ videos, setVideos] = useState([]);

 useEffect(() => {
    axios.get(`http://localhost:3000/api/food-partner/${id}`, {
      withCredentials: true
    }).then((response) => {
      setProfile(response.data.foodPartner);
      setVideos(response.data.foodItems);
    });
  }, [id]);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-profile">
          <div className="profile-image">
            <div className="profile-placeholder">B</div>
          </div>
          
          <div className="profile-details">
            <h1 className="name">{profile?.name}</h1>
            <p className="profile-address">{profile?.address}</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-label">total meals</div>
            <div className="stat-value">{profile?.totalMeals}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">customer serve</div>
            <div className="stat-value">{profile?.customerServed}</div>
          </div>
        </div>
      </div>

      <div className="video-grid">
        {videos.map((v) => (
          <div key={v._id} className="video-card">
            <div className="video-label">
              <video src={v.video} muted ></video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default profile;