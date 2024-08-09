import React, { useState } from 'react';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const projects = [
    { id: 1, title: 'Build a Responsive Website', description: 'We need a responsive website for our business that works well on desktop, tablet, and mobile devices. The site should have 5-7 pages including Home, About Us, Services, Portfolio, and Contact.', budget: 500, deadline: '2024-09-30', skillsRequired: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'] },
    { id: 2, title: 'Create an e-Commerce Platform', description: 'Looking for a developer to build an e-commerce platform with product listings, shopping cart, secure checkout, and user accounts. Integration with PayPal and Stripe for payments is required.', budget: 1200, deadline: '2024-11-15', skillsRequired: ['PHP', 'MySQL', 'JavaScript', 'Payment Gateway Integration'] },
    { id: 3, title: 'Develop a Personal Portfolio', description: 'Need a personal portfolio website to showcase my work as a graphic designer. The site should have a modern, minimalist design with a gallery feature and contact form.', budget: 300, deadline: '2024-08-20', skillsRequired: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design'] },
    { id: 4, title: 'Redesign Company Website', description: 'We are looking for a fresh redesign of our company website to improve user experience and conversion rates. The new design should be modern, user-friendly, and optimized for search engines.', budget: 800, deadline: '2024-10-31', skillsRequired: ['Web Design', 'UI/UX', 'SEO', 'Conversion Rate Optimization'] },
    { id: 5, title: 'Fix Website Bugs', description: 'Need a developer to fix some bugs on our existing site, including form submission errors, broken links, and mobile responsiveness issues. The site is built with WordPress.', budget: 200, deadline: '2024-08-10', skillsRequired: ['WordPress', 'PHP', 'JavaScript', 'Debugging'] },
    { id: 6, title: 'Custom WordPress Theme', description: 'Looking for a custom WordPress theme for our blog. The theme should be clean, fast-loading, and optimized for readability. It should also include custom post types for reviews and recipes.', budget: 450, deadline: '2024-09-15', skillsRequired: ['WordPress', 'PHP', 'CSS', 'Theme Development'] },
    { id: 7, title: 'Develop a Mobile App', description: 'We need a cross-platform mobile app for our fitness tracking service. The app should sync with wearable devices, allow users to log workouts, and provide progress reports.', budget: 2000, deadline: '2024-12-31', skillsRequired: ['React Native', 'API Integration', 'UX Design', 'Mobile Development'] },
    { id: 8, title: 'Create an Online Course Platform', description: 'Seeking a developer to build an online course platform with features like video hosting, quizzes, progress tracking, and a discussion forum for students.', budget: 1500, deadline: '2025-01-15', skillsRequired: ['Full-stack Development', 'Video Streaming', 'Database Management', 'User Authentication'] },
    { id: 9, title: 'Implement SEO Optimization', description: 'Need an SEO expert to optimize our existing website for better search engine rankings. This includes on-page optimization, content strategy, and backlink building.', budget: 600, deadline: '2024-09-30', skillsRequired: ['SEO', 'Content Strategy', 'Analytics', 'Link Building'] },
    { id: 10, title: 'Chatbot Integration', description: 'Looking to integrate a chatbot into our customer service website to handle basic inquiries and route complex issues to human agents.', budget: 700, deadline: '2024-10-15', skillsRequired: ['AI/Machine Learning', 'Natural Language Processing', 'API Integration', 'JavaScript'] },
    { id: 11, title: 'Develop a Web Application', description: 'Need a web application for project management with features like task assignment, progress tracking, and team collaboration tools.', budget: 1800, deadline: '2025-02-28', skillsRequired: ['React', 'Node.js', 'MongoDB', 'WebSocket'] },
    { id: 12, title: 'Create a Landing Page', description: 'Design and develop a high-converting landing page for our new product launch. The page should be optimized for lead generation and A/B testing.', budget: 350, deadline: '2024-08-31', skillsRequired: ['HTML', 'CSS', 'JavaScript', 'Conversion Optimization'] },
    { id: 13, title: 'Implement Payment Gateway', description: 'Integrate a secure payment gateway into our existing web application to handle subscriptions and one-time purchases.', budget: 550, deadline: '2024-10-01', skillsRequired: ['Payment API Integration', 'Security', 'PHP', 'JavaScript'] },
    { id: 14, title: 'Develop a Chrome Extension', description: 'Create a Chrome extension for productivity that allows users to block distracting websites and track their time usage.', budget: 400, deadline: '2024-09-20', skillsRequired: ['JavaScript', 'Chrome API', 'HTML', 'CSS'] },
    { id: 15, title: 'Build a REST API', description: 'Develop a RESTful API for our mobile app to communicate with our backend services. The API should handle user authentication, data retrieval, and updates.', budget: 900, deadline: '2024-11-30', skillsRequired: ['Node.js', 'Express.js', 'MongoDB', 'API Design'] }
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
    <div className='web-development'>
      <header className='header'>
        <h1>Web Development Projects</h1>
        <p>Find your next project and start earning money today!</p>
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
          <p className='no-results'>No results found.</p>
        )}
      </div>

    </div>
  );
}

export default WebDevelopment;
