import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProPage.css';
import ecommerce_icon from '../../assets/e-commerce_icon.png';

const ProPage = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/pro-user');
  };

  return (
    <div className='pro-page'>
      <div className='pro-page-left'>
        <div className='pro-name'>
          <h3><span>Oryve</span> pro.</h3>
        </div>
        <div className='pro-title'>
          <h1>Tailored e-Commerce Solutions <br/> Enhance your digital storefront <br/> with personalized strategies</h1>
          <p>Tailored e-Commerce Solutions specializes in crafting customized digital strategies to elevate your online business. From seamless platform integrations to targeted marketing campaigns, we provide end-to-end solutions that drive growth and maximize your e-commerce potential. Partner with us to transform your vision into a thriving digital reality.</p>
        </div>
        <div className='pro-button'>
          <button className='join-button' onClick={handleJoinNow}>Join Now</button>
        </div>
      </div>
      <div className='pro-page-right'>
        <img src={ecommerce_icon} alt='E-commerce Icon' className='ecommerce-icon' />
      </div>
    </div>
  );
};

export default ProPage;
