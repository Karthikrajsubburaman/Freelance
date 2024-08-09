import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioShowcase.css';
import image_1 from '../../assets/portfolio_img_1.png';
import image_2 from '../../assets/portfolio_img_2.png';
import image_3 from '../../assets/portfolio_img_3.png';
import image_4 from '../../assets/portfolio_img_4.png';
import image_5 from '../../assets/portfolio_img_5.png';
import image_6 from '../../assets/portfolio_img_6.png';
import image_7 from '../../assets/portfolio_img_7.png';
import image_8 from '../../assets/portfolio_img_8.png';

const PortfolioShowcase = () => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate(); 

  const images = [
    { src: image_1, id: 1 },
    { src: image_2, id: 2 },
    { src: image_3, id: 3 },
    { src: image_4, id: 4 },
    { src: image_5, id: 5 },
    { src: image_6, id: 6 },
    { src: image_7, id: 7 },
    { src: image_8, id: 8 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        setVisibleImages(prevVisible => Math.min(prevVisible + 4, images.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images.length]);

  const handleClick = (id) => {
    navigate(`/owner/${id}`);
  };

  return (
    <div className='portfolio-showcase'>
      <h1 className="glowing-text">Top Freelancers Portfolio</h1>
      <div className='portfolio-images'>
        {images.slice(0, visibleImages).map((image, index) => (
          <div 
            className={`portfolio-image-container ${hoveredImage === index ? 'hovered' : ''}`}
            key={index}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleClick(image.id)} // Navigate to owner page on click
          >
            <img src={image.src} alt={`Portfolio ${index + 1}`} />
            <div className='image-overlay'>
              <p className='image-description'>View Details</p>
            </div>
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <button className="load-more" onClick={() => setVisibleImages(prev => prev + 4)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default PortfolioShowcase;
