import React from "react";
import "./Footer.css";
import instagram_icon from '../../assets/Instagram_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import global_icon from '../../assets/global_icon.png';
import accessibility_icon from '../../assets/accessibility_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-top">
        <div className="footer-1">
          <h4>Categories</h4>
          <p>Graphics & Design</p>
          <p>Digital Marketing</p>
          <p>Writing & Translation</p>
          <p>Video & Animation</p>
          <p>Music & Audio</p>
          <p>Oryve Logo Maker</p>
          <p>Programming & Tech</p>
        </div>
        <div className="footer-1">
          <h4>About</h4>
          <p>Careers</p>
          <p>Press & News</p>
          <p>Partnerships</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Intellectual Property Claims</p>
          <p>Investor Relations</p>
        </div>
        <div className="footer-1">
          <h4>Support and Education</h4>
          <p>Help & Support</p>
          <p>Trust & Safety</p>
          <p>Quality Guide</p>
          <p>Selling on Oryve</p>
          <p>Buying on Oryve</p>
          <p>Oryve Guides</p>
          <p>Learn</p>
        </div>
        <div className="footer-1">
          <h4>Community</h4>
          <p>Customer Success Stories</p>
          <p>Community Hub</p>
          <p>Forum</p>
          <p>Events</p>
          <p>Blog</p>
          <p>Creators</p>
          <p>Invite a Friend</p>
        </div>
        <div className="footer-1">
          <h4>Business Solutions</h4>
          <p>About Business Solutions</p>
          <p>Oryve Pro</p>
          <p>Oryve Certified</p>
          <p>Become an Agency</p>
          <p>Oryve Enterprise</p>
          <p>ClearVoice</p>
          <p>Contact Sales</p>
        </div>
        <div className="footer-1">
          <h4>Site Navigation</h4>
          <p><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a></p>
        </div>
      </div>   
      <div className="footer-bottom">
        <h2>Oryve</h2>
        <p>&copy; Oryve International Ltd. 2024</p>
        <div className="footer-icons">
          <img src={instagram_icon}/>
          <img src={linkedin_icon}/>
          <img src={twitter_icon}/>
          <img src={facebook_icon}/>
        </div>
        <img src={global_icon}/>
        <p>English</p>
        <p>&#8377; INR</p>
        <img src={accessibility_icon}/>
      </div>
    </div>
  );
};

export default Footer;
