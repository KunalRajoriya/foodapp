import React, { useRef, useState, useEffect, use } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  // Sample video data - replace with your actual video URLs


  const [videos, setVideos] = useState([]);

  // Play/pause videos based on current index
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(err => console.log('Play error:', err));
        } else {
          video.pause();
          video.currentTime = 0; // Reset video to start
        }
      }
    });
  }, [currentIndex]);

  // Handle scroll snapping and detect current video
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollTop = container.scrollTop;
        const windowHeight = window.innerHeight;
        const index = Math.round(scrollTop / windowHeight);
        
        if (index !== currentIndex && index >= 0 && index < videos.length) {
          setCurrentIndex(index);
        }
      }, 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentIndex, videos.length]);

  useEffect(() => {
     axios.get("http://localhost:3000/api/food",{withCredentials: true})
        .then((response) => {
            setVideos(response.data.foodItems);
     
        })
  })


  return (
    <div className="home-container" ref={containerRef}>
      {videos.map((video, index) => (
        <div key={video._id} className="video-section">
          <video
            ref={el => videoRefs.current[index] = el}
            className="video-player"
            src={video.video}
            loop
            muted
            playsInline
            preload="auto"
          />
          
          <div className="video-overlay">
            <div className="video-info">
              <p className="video-description">{video.description}</p>
              {/* <button 
                className="visit-store-btn"
                onClick={() => handleVisitStore(video.storeId)}
              >
                Visit Store - {video.storeName}
              </button> */}
              <Link className="visit-store-btn" to={"/food-partner/" + video.foodPartner} >Visit Store Page </Link> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;