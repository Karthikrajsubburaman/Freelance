import React, { useState } from 'react';
import './BlockChainCrpytocurrency.css';

const BlockChainCryptocurrency = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const projects = [
    { id: 1, title: 'Develop a Cryptocurrency Wallet', description: 'Create a secure wallet for managing cryptocurrency assets.', budget: 2000, deadline: '2024-08-30', skillsRequired: ['JavaScript', 'Node.js', 'Blockchain'] },
    { id: 2, title: 'Build a Decentralized Exchange', description: 'Develop a platform for peer-to-peer cryptocurrency trading.', budget: 3500, deadline: '2024-09-15', skillsRequired: ['React', 'Blockchain', 'Smart Contracts'] },
    { id: 3, title: 'Create a Blockchain Explorer', description: 'Build a tool to explore blockchain transactions and data.', budget: 1800, deadline: '2024-10-05', skillsRequired: ['JavaScript', 'Blockchain', 'API Integration'] },
    { id: 4, title: 'Implement a Smart Contract Audit Tool', description: 'Develop a tool to automatically audit smart contracts for vulnerabilities.', budget: 2500, deadline: '2024-11-01', skillsRequired: ['Solidity', 'Smart Contracts', 'Security'] },
    { id: 5, title: 'Design a Blockchain-based Voting System', description: 'Create a secure and transparent voting system using blockchain technology.', budget: 3000, deadline: '2024-12-01', skillsRequired: ['Blockchain', 'React', 'Smart Contracts'] },
    { id: 6, title: 'Build a Cryptocurrency Price Tracker App', description: 'Develop an application to track real-time cryptocurrency prices and trends.', budget: 1500, deadline: '2024-09-20', skillsRequired: ['JavaScript', 'API Integration', 'React'] },
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
    <div className='blockchain-cryptocurrency'>
      <header className='header'>
        <h1>Blockchain&Cryptocurrency Projects</h1>
        <p>Explore innovative projects in the blockchain and cryptocurrency space and enhance your skills!</p>
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
          <div className='no-results'>No projects found.</div>
        )}
      </div>
    </div>
  );
};

export default BlockChainCryptocurrency;
