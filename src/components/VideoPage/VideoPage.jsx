import React, { useRef, useEffect } from 'react';
import './VideoPage.css'; 
import Oryve_Freelance_Connect from '../../assets/Oryve_Freelance_Connect.mp4';

const VideoPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5 // Adjust this value as needed
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className='videopage'>
      <div className='overlay'></div>
      <h1>Welcome to the Future of Freelancing</h1>
      <div className='video-container'>
        <video ref={videoRef} controls muted>
          <source src={Oryve_Freelance_Connect} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='footer-text'>Transforming Freelancing, One Click at a Time</div>
    </div>
  );
};

export default VideoPage;
