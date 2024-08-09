import React, { useState } from 'react';
import './DataAnalysis.css';

const DataAnalysis = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const analyses = [
    { id: 1, title: 'Sales Data Analysis', description: 'Analyze sales data to identify trends and insights for the past year.', budget: 800, deadline: '2024-09-30', skillsRequired: ['Excel', 'Tableau', 'SQL'] },
    { id: 2, title: 'Customer Behavior Analysis', description: 'Study customer behavior data to improve marketing strategies.', budget: 1200, deadline: '2024-10-15', skillsRequired: ['Python', 'R', 'Machine Learning'] },
    { id: 3, title: 'Market Research Analysis', description: 'Conduct market research and analyze data to identify potential market segments.', budget: 1000, deadline: '2024-08-25', skillsRequired: ['SPSS', 'Survey Data Analysis', 'Statistical Analysis'] },
    { id: 4, title: 'Financial Data Analysis', description: 'Analyze financial data to provide insights into company performance.', budget: 1500, deadline: '2024-12-01', skillsRequired: ['Excel', 'Financial Modeling', 'SQL'] },
    { id: 5, title: 'Healthcare Data Analysis', description: 'Analyze healthcare data to identify patterns and improve patient outcomes.', budget: 2000, deadline: '2024-09-20', skillsRequired: ['Python', 'R', 'Data Visualization'] },
    { id: 6, title: 'Supply Chain Optimization Analysis', description: 'Analyze supply chain data to identify inefficiencies and propose optimizations.', budget: 1800, deadline: '2024-11-10', skillsRequired: ['Python', 'Operations Research', 'Predictive Modeling'] },
    { id: 7, title: 'Social Media Sentiment Analysis', description: 'Analyze social media data to gauge public sentiment about a brand or product.', budget: 1100, deadline: '2024-10-05', skillsRequired: ['Natural Language Processing', 'Python', 'Text Mining'] },
    { id: 8, title: 'Web Traffic Analysis', description: 'Analyze website traffic data to improve user experience and conversion rates.', budget: 900, deadline: '2024-09-15', skillsRequired: ['Google Analytics', 'SQL', 'Data Visualization'] },
    { id: 9, title: 'Predictive Maintenance Analysis', description: 'Analyze equipment sensor data to predict maintenance needs and prevent breakdowns.', budget: 2200, deadline: '2024-11-30', skillsRequired: ['Machine Learning', 'Time Series Analysis', 'IoT Data Analysis'] }
  ];

  const filteredAnalyses = analyses
    .filter(analysis => analysis.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'recent') return b.id - a.id;
      if (sortOption === 'high-pay') return b.budget - a.budget;
      if (sortOption === 'low-pay') return a.budget - b.budget;
      return 0;
    });

  return (
    <div className='data-analysis'>
      <header className='header'>
        <h1>Data Analysis Projects</h1>
        <p>Find your next data analysis project and start earning money today!</p>
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

      <div className='analysis-listings'>
        {filteredAnalyses.length > 0 ? (
          filteredAnalyses.map(analysis => (
            <div key={analysis.id} className='analysis'>
              <h2>{analysis.title}</h2>
              <p>Description: {analysis.description}</p>
              <p>Budget: ${analysis.budget}</p>
              <button>Apply Now</button>
            </div>
          ))
        ) : (
          searchTerm ? <p className='no-results'>No results found.</p> : <p className='no-results'>Please enter a search term to find projects.</p>
        )}
      </div>
    </div>
  );
}

export default DataAnalysis;
