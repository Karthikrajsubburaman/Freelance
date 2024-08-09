import React, { useState, useEffect } from 'react';
import './HomePage.css';

import amazon_logo from '../../assets/amazon_logo.png';
import google_logo from '../../assets/google_logo.png';
import meta_logo from '../../assets/meta_logo.png';
import netflix_logo from '../../assets/netflix_logo.png';
import search_icon from '../../assets/search_icon.png';
import programming_icon from '../../assets/programming_icon.png';
import graphics_icon from '../../assets/graphics_icon.png';
import digital_icon from '../../assets/digital_icon.png';
import video_icon from '../../assets/video_icon.png';
import business_icon from '../../assets/business_icon.png';
import ai_icon from '../../assets/ai_icon.png';
import writing_icon from '../../assets/writing_icon.png';
import music_icon from '../../assets/music_icon.png';

const HomePage = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveField(Math.floor(Math.random() * 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fields = [
    { icon: programming_icon, title: "Programming & Tech" },
    { icon: graphics_icon, title: "Graphics & Design" },
    { icon: digital_icon, title: "Digital Marketing" },
    { icon: writing_icon, title: "Writing & Translation" },
    { icon: video_icon, title: "Video & Animation" },
    { icon: ai_icon, title: "AI Services" },
    { icon: music_icon, title: "Music & Audio" },
    { icon: business_icon, title: "Business" }
  ];

  return (
    <div className='homepage'>
      <div className='container'>
        <h1 className='heading-text' data-text="Find the right">Find the right <span>freelance</span></h1>
        <h1 className='heading-text' data-text="service, right away">service, right away</h1>
        <div className={`input-container ${searchFocus ? 'focus' : ''}`}>
          <input 
            placeholder='Search for any service...' 
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <img src={search_icon} alt='Search' className='search-icon' />
        </div>
        <div className='companies'>
          <h3>Trusted by:</h3>
          <div className='logo-container'>
            <img src={meta_logo} alt='Meta' />
            <img src={google_logo} alt='Google' />
            <img src={netflix_logo} alt='Netflix' />
            <img src={amazon_logo} alt='Amazon' />
          </div>
        </div>
      </div>
      <div className='fields'>
        {fields.map((field, index) => (
          <div 
            className={`field-1 ${activeField === index ? 'active' : ''}`} 
            key={index}
            onMouseEnter={() => setActiveField(index)}
            onMouseLeave={() => setActiveField(null)}
          >
            <img src={field.icon} alt={field.title} />
            <h3>{field.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;