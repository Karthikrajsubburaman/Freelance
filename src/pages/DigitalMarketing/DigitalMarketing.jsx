import React, { useState } from 'react';
import './DigitalMarketing.css';

const DigitalMarketing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const projects = [
    { id: 1, title: 'SEO Optimization for E-commerce', description: 'Enhance search engine rankings for an e-commerce website.', budget: 1500 },
    { id: 2, title: 'Social Media Campaign for Brand Awareness', description: 'Design and execute a social media campaign to increase brand visibility.', budget: 1200 },
    { id: 3, title: 'Content Marketing Strategy for Blog', description: 'Develop a content marketing strategy to drive traffic and engagement for a blog.', budget: 2500 },
    { id: 4, title: 'PPC Advertising Campaign Management', description: 'Manage and optimize PPC campaigns for increased ROI.', budget: 1800 },
    { id: 5, title: 'Email Marketing Automation Setup', description: 'Set up automated email marketing campaigns for customer engagement.', budget: 3000 },
    { id: 6, title: 'Influencer Marketing Collaboration', description: 'Collaborate with influencers to promote products and services.', budget: 1600 },
    { id: 7, title: 'Website Analytics and Reporting', description: 'Analyze website performance and create detailed reports.', budget: 2000 },
    { id: 8, title: 'Online Reputation Management', description: 'Manage and improve online reputation through various strategies.', budget: 2200 },
    { id: 9, title: 'Affiliate Marketing Program Setup', description: 'Set up and manage an affiliate marketing program for increased sales.', budget: 1700 },
    { id: 10, title: 'Conversion Rate Optimization', description: 'Optimize website to increase conversion rates and drive sales.', budget: 1900 },
    { id: 11, title: 'Mobile App Marketing Strategy', description: 'Develop a marketing strategy to promote a mobile app.', budget: 2100 },
    { id: 12, title: 'Brand Development and Identity Creation', description: 'Create a brand identity and development strategy for a new company.', budget: 2300 },
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
    <div className='digital-marketing'>
      <header className='header'>
        <h1>Digital Marketing Projects</h1>
        <p>Explore a variety of digital marketing projects and find opportunities to enhance your skills!</p>
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

export default DigitalMarketing;
