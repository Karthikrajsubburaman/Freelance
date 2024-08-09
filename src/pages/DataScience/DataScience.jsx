import React, { useState } from 'react';
import './DataScience.css';

const DataScience = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const projects = [
    { id: 1, title: 'Predictive Analytics with Machine Learning', description: 'Building models to predict future outcomes based on historical data.', budget: 1200, deadline: '2024-09-30', skillsRequired: ['Python', 'Machine Learning', 'Data Analysis'] },
    { id: 2, title: 'Data Cleaning and Preprocessing', description: 'Techniques for preparing and cleaning large datasets for analysis.', budget: 800, deadline: '2024-10-15', skillsRequired: ['Python', 'Pandas', 'Data Cleaning'] },
    { id: 3, title: 'Deep Learning for Image Recognition', description: 'Using neural networks to recognize and classify images in large datasets.', budget: 1500, deadline: '2024-11-20', skillsRequired: ['TensorFlow', 'Keras', 'Deep Learning'] },
    { id: 4, title: 'Natural Language Processing', description: 'Analyzing and interpreting human language data for sentiment analysis and text classification.', budget: 1000, deadline: '2024-12-31', skillsRequired: ['NLP', 'Python', 'Text Mining'] },
    { id: 5, title: 'Time Series Forecasting', description: 'Developing models to predict future values based on previously observed values.', budget: 1300, deadline: '2025-01-15', skillsRequired: ['Time Series Analysis', 'ARIMA', 'Prophet'] },
    { id: 6, title: 'Recommendation System Development', description: 'Building a system to provide personalized recommendations based on user behavior.', budget: 1700, deadline: '2025-02-28', skillsRequired: ['Collaborative Filtering', 'Matrix Factorization', 'Python'] },
    { id: 7, title: 'Anomaly Detection in IoT Data', description: 'Implementing algorithms to detect anomalies in data from IoT devices.', budget: 1400, deadline: '2025-03-31', skillsRequired: ['Anomaly Detection', 'Machine Learning', 'IoT'] },
    { id: 8, title: 'Big Data Processing with Spark', description: 'Using Apache Spark for processing and analyzing large-scale datasets.', budget: 1600, deadline: '2025-04-30', skillsRequired: ['Apache Spark', 'PySpark', 'Big Data'] },
    { id: 9, title: 'A/B Testing and Experimentation', description: 'Designing and analyzing A/B tests to make data-driven decisions.', budget: 1100, deadline: '2025-05-31', skillsRequired: ['Statistical Analysis', 'Hypothesis Testing', 'Experimental Design'] }
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
    <div className='data-science'>
      <header className='header'>
        <h1>Data Science Projects</h1>
        <p>Find exciting data science projects to work on and enhance your skills!</p>
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

export default DataScience;
