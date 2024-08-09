import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SamplePage.css';
import image_1 from '../../assets/sample_img_1.jpeg';
import image_2 from '../../assets/sample_img_2.jpg';
import image_3 from '../../assets/sample_img_3.jpeg';
import image_4 from '../../assets/sample_img_4.jpg';
import image_5 from '../../assets/sample_img_5.png';
import image_6 from '../../assets/sample_img_6.png';
import image_7 from '../../assets/sample_img_7.jpg';
import image_8 from '../../assets/sample_img_8.jpeg';
import image_9 from '../../assets/sample_img_9.jpeg';
import image_10 from '../../assets/sample_img_10.jpg';
import image_11 from '../../assets/sample_img_11.png';
import image_12 from '../../assets/sample_img_12.png';
import like_icon from '../../assets/like_icon.png';
import liked_icon from '../../assets/liked_icon.png'; 

const SamplePage = () => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set()); 

  const images = [
    image_1, image_2, image_3, image_4, image_5, image_6,
    image_7, image_8, image_9, image_10, image_11, image_12
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

  const toggleLike = (index) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className='samplepage'>
      <h1 className="glowing-text">Crafted on <span>Oryve</span></h1>
      <div className='sample-images'>
        {images.slice(0, visibleImages).map((image, index) => (
          <div 
            className={`sample-image-container ${hoveredImage === index ? 'hovered' : ''}`}
            key={index}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img src={image} alt={`Sample ${index + 1}`} />
            <div className='image-overlay'>
              <div 
                className='like-icon'
                onClick={() => toggleLike(index)}
              >
                <img 
                  src={likedImages.has(index) ? liked_icon : like_icon} 
                  alt='Like Icon' 
                />
              </div>
              <p className='image-description'>Discover More</p>
            </div>
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <Link className="load-more" to='/load_more_sample_page'>
          Load More
        </Link>
      )}
    </div>
  );
};

export default SamplePage;
