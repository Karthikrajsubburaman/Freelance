import React from 'react';
import './ProUserPage.css';
import premium_icon from '../../assets/premium_icon.png';

const ProUserPage = () => {
  return (
    <div className='pro-user-page'>
      <div className='pro-user-header'>
        <h1>Welcome to <span>Oryve </span>Pro</h1>
        <p>Your subscription is now active! Enjoy premium features and tailored e-commerce solutions.</p>
      </div>
      <div className='pro-user-content'>
        <div className='pro-user-info'>
          <img src={premium_icon} alt='Premium Icon' className='premium-icon' />
          <h2>Exclusive Benefits</h2>
          <ul>
            <li>Personalized Support</li>
            <li>Advanced Analytics</li>
            <li>Priority Access to New Features</li>
            <li>Custom Integrations</li>
          </ul>
        </div>
        <div className='pro-user-actions'>
          <button className='action-button'>Explore Features</button>
          <button className='action-button'>Manage Subscription</button>
        </div>
      </div>
    </div>
  );
};

export default ProUserPage;
