import React, { useState } from 'react';
import './MachineLearning.css';

const MachineLearning = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const projects = [
    { id: 1, title: 'Sentiment Analysis on Social Media', description: 'Develop a model to analyze sentiment in social media posts about a specific brand or product.', budget: 1100, deadline: '2024-10-31', skillsRequired: ['NLP', 'Python', 'Sentiment Analysis'] },
    { id: 2, title: 'Fraud Detection in Financial Transactions', description: 'Create an algorithm to detect fraudulent transactions in real-time financial data streams.', budget: 1800, deadline: '2025-01-15', skillsRequired: ['Machine Learning', 'Anomaly Detection', 'Big Data'] },
    { id: 3, title: 'Customer Churn Prediction', description: 'Build a predictive model to identify customers likely to churn and suggest retention strategies.', budget: 1300, deadline: '2024-11-30', skillsRequired: ['Predictive Modeling', 'Python', 'Customer Analytics'] },
    { id: 4, title: 'Genomic Data Analysis', description: 'Analyze large-scale genomic data to identify patterns associated with specific diseases.', budget: 2000, deadline: '2025-03-01', skillsRequired: ['Bioinformatics', 'Statistical Analysis', 'R'] },
    { id: 5, title: 'Traffic Pattern Optimization', description: 'Develop a model to optimize traffic flow in urban areas using real-time and historical data.', budget: 1600, deadline: '2025-02-15', skillsRequired: ['Time Series Analysis', 'Optimization Algorithms', 'GIS'] },
    { id: 6, title: 'Recommendation Engine for E-commerce', description: 'Create a personalized product recommendation system for an e-commerce platform.', budget: 1400, deadline: '2024-12-20', skillsRequired: ['Collaborative Filtering', 'Matrix Factorization', 'Python'] }
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
    <div className='machine-learning'>
      <header className='header'>
        <h1>Machine Learning Projects</h1>
        <p>Find exciting machine learning projects to work on and enhance your skills!</p>
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

export default MachineLearning;
