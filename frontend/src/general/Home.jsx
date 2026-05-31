import React, { useRef, useState, useEffect, use } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [videos, setVideos] = useState([]);

  const [isPlaying, setIsPlaying] = useState({});
  const [showPlayButton, setShowPlayButton] = useState({});



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

  // Play/pause videos based on current index
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(err => console.log('Play error:', err));
          setIsPlaying(prev => ({ ...prev, [index]: true })); // ADD THIS LINE
        } else {
          video.pause();
          video.currentTime = 0;
          setIsPlaying(prev => ({ ...prev, [index]: false })); // ADD THIS LINE
        }
      }
    });
  }, [currentIndex, videos.length]);



  useEffect(() => {
    axios.get("http://localhost:3000/api/food", { withCredentials: true })
      .then((response) => {
        setVideos(response.data.foodItems);

      })
  },[])

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(prev => ({ ...prev, [index]: true }));
    } else {
      video.pause();
      setIsPlaying(prev => ({ ...prev, [index]: false }));
    }

    // Show play/pause icon briefly
    setShowPlayButton(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setShowPlayButton(prev => ({ ...prev, [index]: false }));
    }, 500);
      
  };



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
            onClick={() => handleVideoClick(index)} // ADD THIS LINE
          />

          {showPlayButton[index] && (
            <div className="play-pause-overlay">
              <div className="play-pause-icon">
                {isPlaying[index] ? (
                  // Pause Icon
                  <svg viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  // Play Icon
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>
          )}

          <div className="video-overlay">
            <div className="video-info">
              <p className="video-description">{video.description}</p>
              <Link className="visit-store-btn" to={`/food-partner/${video.foodpartner}`} >
                Visit Store Page
              </Link>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;