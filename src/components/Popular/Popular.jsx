import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Popular.css";
import website_icon from "../../assets/website_icon.png";
import machine_learning_icon from "../../assets/machine_learning_icon.png";
import software_icon from "../../assets/software_icon.png";
import categories_icon from "../../assets/categories_icon.png";
import clear_icon from "../../assets/clear_icon.png";
import quality_icon from "../../assets/quality_icon.png";
import support_icon from "../../assets/support_icon.png";
import app_icon from '../../assets/app_icon.png';
import cloud_icon from '../../assets/cloud_icon.png';
import data_icon from '../../assets/data_icon.png';
import data_science_icon from '../../assets/data_science_icon.png';
import blockchain_icon from '../../assets/blockchain_icon.png';
import digital_icon from '../../assets/digital_icon.png';
import digital_market_icon from '../../assets/digital_market_icon.png';
import ui_ux_icon from '../../assets/ui_ux_icon.png';

const Popular = () => {
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    setAnimateItems(true);
  }, []);

  const services = [
    { title: "Web Development", icon: website_icon, link: "/web_development" },
    { title: "App Development", icon: app_icon, link: "/app_development" },
    { title: "Cloud Services", icon: cloud_icon, link: "/cloud_services" },
    { title: "Data Analysis", icon: data_icon, link: "/data_analysis" },
    { title: "Data Science", icon: data_science_icon, link: "/data_science" },
    { title: "Machine Learning", icon: machine_learning_icon, link: "/machine_learning" },
    { title: "Software Development", icon: software_icon, link: "/software_development" },
    { title: "Blockchain & Cryptocurrency", icon: blockchain_icon, link: "/blockchain_cryptocurrency" },
    { title: "Digital Marketing", icon: digital_market_icon, link: "/digital_marketing" },
    { title: "UI/UX Design", icon: ui_ux_icon, link: "/ui_ux" },
  ];

  const descriptionItems = [
    { icon: categories_icon, title: "Over 700 categories", description: "Get results from skilled freelancers from all over the world, for every task, at any price point." },
    { icon: clear_icon, title: "Clear, upfront pricing", description: "No hourly rates, just project-based pricing. Payments only get released when you approve." },
    { icon: quality_icon, title: "Quality work done faster", description: "Filter to find the right freelancers quickly and get great work delivered in no time, every time." },
    { icon: support_icon, title: "24/7 award-winning support", description: "Chat with our team to get your questions answered or resolve any issues with your orders." },
    { icon: website_icon, title: "Custom Website Design", description: "Get a unique, tailor-made website that fits your brand and helps you stand out online." },
    { icon: software_icon, title: "Software Solutions", description: "From custom software development to integration, get solutions designed to fit your specific needs." },
    { icon: app_icon, title: "Mobile App Development", description: "Develop high-performance mobile apps that offer a seamless user experience on any device." },
    { icon: digital_icon, title: "Digital Marketing", description: "Enhance your online presence with expert digital marketing strategies that drive results." },
  ];
  
  

  return (
    <div className="popular">
      <div className="background-animation"></div>
      <h1 className="glow-text">Popular Services</h1>
      <div className="section">
        {services.map((service, index) => (
          <div 
            className={`section-item ${animateItems ? 'animate' : ''}`} 
            key={service.title}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <h3>{service.title}</h3>
            <Link to={service.link}>
              <img src={service.icon} alt={service.title} />
            </Link>
          </div>
        ))}
      </div>
      <div className="description">
        <div className="description_title">
          <h1 className="glow-text">
            Freelance talent from around the world <br /> right at your fingertips
          </h1>
        </div>
        {descriptionItems.map((item, index) => (
          <div 
            className={`description_details ${animateItems ? 'animate' : ''}`}
            key={item.title}
            style={{animationDelay: `${(index + services.length) * 0.1}s`}}
          >
            <img src={item.icon} alt={`${item.title} Icon`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;