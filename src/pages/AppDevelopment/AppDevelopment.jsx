import React, { useState } from 'react';
import './AppDevelopment.css';

const AppDevelopment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const jobs = [
    { id: 1, title: 'Develop a Mobile App for Fitness', description: 'Create a mobile application for fitness tracking with user profiles and workout plans.', budget: 1500 },
    { id: 2, title: 'Build a Task Management App', description: 'Develop a task management app with features like to-do lists, reminders, and project tracking.', budget: 1200 },
    { id: 3, title: 'Design a Custom CRM Application', description: 'Build a custom CRM system with client management, sales tracking, and reporting features.', budget: 2500 },
    { id: 4, title: 'Create a Shopping App with Payment Integration', description: 'Develop a shopping app with payment gateway integration and product catalog.', budget: 1800 },
    { id: 5, title: 'Develop a Social Networking App', description: 'Create a social networking app with user profiles, messaging, and news feeds.', budget: 3000 },
    { id: 6, title: 'Build a Booking System for Events', description: 'Develop an app for booking events with calendar integration and payment options.', budget: 1600 },
    { id: 7, title: 'Create a Language Learning App', description: 'Develop an interactive app for language learning with quizzes and progress tracking.', budget: 2000 },
    { id: 8, title: 'Design a Food Delivery Application', description: 'Build a food delivery app with restaurant listings, order tracking, and payment processing.', budget: 2200 },
    { id: 9, title: 'Develop a Meditation and Mindfulness App', description: 'Create an app for guided meditations, breathing exercises, and sleep stories.', budget: 1700 },
    { id: 10, title: 'Build a Personal Finance Management App', description: 'Develop an app for budget tracking, expense categorization, and financial goal setting.', budget: 1900 },
    { id: 11, title: 'Create a Travel Planning Application', description: 'Design an app for travel itinerary planning, booking, and travel tips.', budget: 2100 },
    { id: 12, title: 'Develop a Job Search and Career App', description: 'Build an app for job listings, resume building, and career development resources.', budget: 2300 },
    { id: 13, title: 'Design a Health Monitoring App', description: 'Create an app for tracking health metrics, medication reminders, and doctor appointments.', budget: 2400 },
    { id: 14, title: 'Build a Real Estate Listing App', description: 'Develop an app for real estate listings, virtual tours, and mortgage calculators.', budget: 2600 },
    { id: 15, title: 'Create an E-learning Platform App', description: 'Design an app for online courses, video lectures, and interactive quizzes.', budget: 2800 }
  ];

  const filteredJobs = jobs
    .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'recent') return b.id - a.id;
      if (sortOption === 'high-pay') return b.budget - a.budget;
      if (sortOption === 'low-pay') return a.budget - b.budget;
      return 0;
    });

  return (
    <div className='app-development'>
      <header className='header'>
        <h1>App Development Projects</h1>
        <p>Find exciting app development projects and start building amazing apps!</p>
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

      <div className='job-listings'>
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className='job'>
              <h2>{job.title}</h2>
              <p>Description: {job.description}</p>
              <p>Budget: ${job.budget}</p>
              <button>Apply Now</button>
            </div>
          ))
        ) : (
          <p className='no-results'>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default AppDevelopment;
