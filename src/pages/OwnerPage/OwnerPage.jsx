import React from 'react';
import { useParams } from 'react-router-dom';
import './OwnerPage.css';

import image_1 from '../../assets/portfolio_img_1.png';
import image_2 from '../../assets/portfolio_img_2.png';
import image_3 from '../../assets/portfolio_img_3.png';
import image_4 from '../../assets/portfolio_img_4.png';
import image_5 from '../../assets/portfolio_img_5.png';
import image_6 from '../../assets/portfolio_img_6.png';
import image_7 from '../../assets/portfolio_img_7.png';
import image_8 from '../../assets/portfolio_img_8.png';

// Map image imports to owner IDs
const images = [
  image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8
];

const OwnerPage = () => {
  const { id } = useParams();
  const ownerId = parseInt(id, 10);

  // Example static data for owners
  const owners = {
    1: { 
      name: 'Aarav Patel', 
      skills: ['JavaScript', 'React', 'Node.js'],
      pastProjects: ['E-commerce Platform', 'Social Media Dashboard'],
      presentProjects: ['AI Chatbot', 'Fitness Tracking App'],
      achievements: ['Best Startup Award 2023', 'Tech Innovator of the Year'],
    },
    2: { 
      name: 'Priya Sharma', 
      skills: ['Python', 'Django', 'Machine Learning'],
      pastProjects: ['Data Visualization Tool', 'Predictive Analytics System'],
      presentProjects: ['Healthcare Management Platform', 'Smart City Initiative'],
      achievements: ['Published ML Research Paper', 'Google Developer Expert'],
    },
    3: {
      name: 'Vikram Reddy',
      skills: ['Java', 'Spring Boot', 'Microservices'],
      pastProjects: ['Banking Application', 'Supply Chain Management System'],
      presentProjects: ['Cloud Migration', 'Blockchain Integration'],
      achievements: ['Oracle Certified Master', 'Tech Conference Speaker'],
    },
    4: {
      name: 'Ananya Gupta',
      skills: ['UI/UX Design', 'Adobe Creative Suite', 'Figma'],
      pastProjects: ['Mobile App Redesign', 'Brand Identity Creation'],
      presentProjects: ['VR Interface Design', 'Accessibility Improvement'],
      achievements: ['Design Think Tank Member', 'UX Awards Finalist'],
    },
    5: {
      name: 'Rahul Mehta',
      skills: ['C++', 'Game Development', 'Unity'],
      pastProjects: ['Mobile Puzzle Game', '3D Racing Simulator'],
      presentProjects: ['AR Educational Game', 'Cross-platform MMO'],
      achievements: ['Indie Game Festival Winner', 'Million Downloads Milestone'],
    },
    6: {
      name: 'Neha Kapoor',
      skills: ['Data Science', 'R', 'Tableau'],
      pastProjects: ['Customer Segmentation Analysis', 'Fraud Detection System'],
      presentProjects: ['Predictive Maintenance Model', 'NLP for Sentiment Analysis'],
      achievements: ['Kaggle Competition Top 1%', 'Data Science Mentor'],
    },
    7: {
      name: 'Arjun Singh',
      skills: ['DevOps', 'AWS', 'Kubernetes'],
      pastProjects: ['CI/CD Pipeline Implementation', 'Server Optimization'],
      presentProjects: ['Multi-cloud Strategy', 'Zero Trust Security Implementation'],
      achievements: ['AWS Certified Solutions Architect', 'DevOps Transformation Lead'],
    },
    8: {
      name: 'Zara Iyer',
      skills: ['iOS Development', 'Swift', 'SwiftUI'],
      pastProjects: ['Meditation App', 'Contactless Payment Solution'],
      presentProjects: ['Health Tracking Wearable Integration', 'AR Shopping Experience'],
      achievements: ['Apple WWDC Scholar', 'Featured App Store Developer'],
    },
  };

  const owner = owners[ownerId];

  if (!owner) {
    return <div>Owner not found</div>;
  }

  return (
    <div className="owner-page">
      <div className="owner-info">
        <h1 className="owner-name">{owner.name}</h1>
        <div className="owner-section">
          <h2>Skills</h2>
          <ul>
            {owner.skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="owner-section">
          <h2>Past Projects</h2>
          <ul>
            {owner.pastProjects.map(project => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="owner-section">
          <h2>Present Projects</h2>
          <ul>
            {owner.presentProjects.map(project => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="owner-section">
          <h2>Achievements</h2>
          <ul>
            {owner.achievements.map(achievement => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="owner-portfolio">
        <img 
          src={images[ownerId - 1]} 
          alt={`${owner.name}'s Portfolio`} 
          className="portfolio-image"
        />
      </div>
    </div>
  );
};

export default OwnerPage;
