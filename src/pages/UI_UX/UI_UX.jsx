import React, { useState } from 'react';
import './UI_UX.css';

const UI_UX = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const projects = [
    { id: 1, title: 'Redesign E-commerce Website', description: 'Revamp the UI/UX of an existing e-commerce website for better user engagement.', budget: 3000 },
    { id: 2, title: 'Create a Mobile App UI Kit', description: 'Design a comprehensive UI kit for a mobile app including icons, buttons, and layout components.', budget: 2000 },
    { id: 3, title: 'UX Research for Health App', description: 'Conduct user research and create user personas for a new health tracking app.', budget: 1500 },
    { id: 4, title: 'Design a SaaS Dashboard', description: 'Develop a user-friendly dashboard for a SaaS application with various analytics features.', budget: 2500 },
    { id: 5, title: 'Website Redesign for Startup', description: 'Redesign the website of a startup to enhance user experience and visual appeal.', budget: 1800 },
    { id: 6, title: 'Create a Design System', description: 'Develop a design system with reusable components for a large-scale web application.', budget: 2200 },
    { id: 7, title: 'User Testing for E-learning Platform', description: 'Conduct usability testing sessions for an e-learning platform and provide actionable insights.', budget: 1700 },
    { id: 8, title: 'Design a Landing Page', description: 'Create a high-converting landing page for a marketing campaign.', budget: 1000 },
    { id: 9, title: 'Improve UX of a Mobile App', description: 'Analyze and improve the user experience of an existing mobile application.', budget: 2000 },
    { id: 10, title: 'Design a Portfolio Website', description: 'Create a personal portfolio website showcasing design projects and skills.', budget: 1500 },
  ];

  const filteredProjects = projects
    .filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'recent') return b.id - a.id;
      if (sortOption === 'high-pay') return b.budget - a.budget;
      if (sortOption === 'low-pay') return a.budget - b.budget;
      return 0;
    });

  return (
    <div className='ui-ux'>
      <header className='header'>
        <h1>UI/UX Design Projects</h1>
        <p>Explore exciting UI/UX design projects and showcase your design skills!</p>
      </header>

      <div className='filters'>
        <input 
          type='text' 
          placeholder='Search projects...' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value=''>Sort by</option>
          <option value='recent'>Most Recent</option>
          <option value='high-pay'>High Pay</option>
          <option value='low-pay'>Low Pay</option>
        </select>
      </div>

      <div className='project-listings'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div key={project.id} className='project'>
              <h2>{project.title}</h2>
              <p>Description: {project.description}</p>
              <p>Budget: ${project.budget}</p>
              <button>Apply Now</button>
            </div>
          ))
        ) : (
          <p className='no-results'>No projects found.</p>
        )}
      </div>
    </div>
  );
}

export default UI_UX;
