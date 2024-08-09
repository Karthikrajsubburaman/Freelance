import React, { useState } from 'react';
import './CloudServices.css';

const CloudServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const services = [
    { id: 1, title: 'AWS Migration', description: 'Migrate your existing applications to AWS for improved scalability and cost-efficiency.', budget: 1000, deadline: '2024-09-30', skillsRequired: ['AWS', 'Cloud Migration', 'DevOps'] },
    { id: 2, title: 'Azure Cloud Setup', description: 'Set up a new cloud infrastructure using Microsoft Azure, including virtual machines, databases, and networking.', budget: 1500, deadline: '2024-10-15', skillsRequired: ['Azure', 'Cloud Architecture', 'Networking'] },
    { id: 3, title: 'Google Cloud Optimization', description: 'Optimize your Google Cloud Platform resources to improve performance and reduce costs.', budget: 800, deadline: '2024-08-25', skillsRequired: ['Google Cloud', 'Cost Optimization', 'Performance Tuning'] },
    { id: 4, title: 'Hybrid Cloud Implementation', description: 'Implement a hybrid cloud solution that integrates on-premises infrastructure with cloud services.', budget: 2000, deadline: '2024-12-01', skillsRequired: ['Hybrid Cloud', 'Integration', 'Security'] },
    { id: 5, title: 'Cloud Security Audit', description: 'Conduct a thorough security audit of your cloud infrastructure to identify vulnerabilities and recommend improvements.', budget: 1200, deadline: '2024-09-20', skillsRequired: ['Cloud Security', 'Audit', 'Compliance'] },
    { id: 6, title: 'Containerization with Kubernetes', description: 'Containerize applications and set up Kubernetes clusters for efficient deployment and scaling.', budget: 1800, deadline: '2024-11-10', skillsRequired: ['Kubernetes', 'Docker', 'Microservices'] },
    { id: 7, title: 'Serverless Architecture Design', description: 'Design and implement a serverless architecture for your applications using AWS Lambda or Azure Functions.', budget: 1600, deadline: '2024-10-30', skillsRequired: ['Serverless', 'AWS Lambda', 'Azure Functions'] },
    { id: 8, title: 'Multi-Cloud Strategy Development', description: 'Develop a multi-cloud strategy to leverage the best services from different cloud providers and avoid vendor lock-in.', budget: 2200, deadline: '2024-12-15', skillsRequired: ['Multi-Cloud', 'Strategy', 'Cloud Management'] },
    { id: 9, title: 'Cloud Data Analytics Setup', description: 'Set up a data analytics pipeline in the cloud using services like AWS Redshift or Google BigQuery.', budget: 1700, deadline: '2024-11-05', skillsRequired: ['Data Analytics', 'Big Data', 'SQL'] },
    { id: 10, title: 'IoT Cloud Integration', description: 'Integrate IoT devices with cloud services for data collection, processing, and analysis.', budget: 1900, deadline: '2024-11-25', skillsRequired: ['IoT', 'Cloud Integration', 'Data Processing'] },
    { id: 11, title: 'Cloud Disaster Recovery Planning', description: 'Develop and implement a comprehensive disaster recovery plan using cloud services to ensure business continuity.', budget: 1400, deadline: '2024-10-05', skillsRequired: ['Disaster Recovery', 'Business Continuity', 'Cloud Backup'] },
    { id: 12, title: 'DevOps Implementation in Cloud', description: 'Implement DevOps practices and tools in a cloud environment to streamline development and deployment processes.', budget: 2100, deadline: '2024-11-30', skillsRequired: ['DevOps', 'CI/CD', 'Infrastructure as Code'] }
  ];

  const filteredServices = services
    .filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'recent') return b.id - a.id;
      if (sortOption === 'high-pay') return b.budget - a.budget;
      if (sortOption === 'low-pay') return a.budget - b.budget;
      return 0;
    });

  return (
    <div className='cloud-services'>
      <header className='header'>
        <h1>Cloud Services</h1>
        <p>Find the best cloud services to enhance your business operations.</p>
      </header>

      <div className='filters'>
        <input 
          type='text' 
          placeholder='Search services...' 
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

      <div className='service-listings'>
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <div key={service.id} className='service'>
              <h2>{service.title}</h2>
              <p>Description: {service.description}</p>
              <p>Budget: ${service.budget}</p>
              <button>Apply Now</button>
            </div>
          ))
        ) : (
          searchTerm ? <p className='no-results'>No results found.</p> : <p className='no-results'>Please enter a search term to find services.</p>
        )}
      </div>
    </div>
  );
}

export default CloudServices;
