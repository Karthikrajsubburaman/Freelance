import React, { useState } from "react";
import "./SoftwareDevelopment.css";

const SoftwareDevelopment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const projects = [
    { id: 1, title: 'Develop a Chat Application', description: 'Create a real-time chat application using WebSocket.', budget: 1500, deadline: '2024-09-15', skillsRequired: ['JavaScript', 'Node.js', 'WebSocket'] },
    { id: 2, title: 'Build an E-commerce Platform', description: 'Develop a full-featured e-commerce website with payment integration.', budget: 2500, deadline: '2024-10-20', skillsRequired: ['React', 'Node.js', 'MongoDB'] },
    { id: 3, title: 'Create a Task Management Tool', description: 'Build a tool for managing and tracking tasks with user authentication.', budget: 1200, deadline: '2024-11-05', skillsRequired: ['React', 'Express', 'PostgreSQL'] },
    { id: 4, title: 'Develop a Blogging Platform', description: 'Create a blogging platform with content management and user interaction features.', budget: 1800, deadline: '2024-12-01', skillsRequired: ['Angular', 'Node.js', 'MySQL'] },
    { id: 5, title: 'Build a Social Media Dashboard', description: 'Develop a dashboard for managing and analyzing social media accounts and engagement.', budget: 2000, deadline: '2025-01-10', skillsRequired: ['Vue.js', 'Express', 'MongoDB'] },
    { id: 6, title: 'Create a Portfolio Website', description: 'Build a personal portfolio website to showcase work and projects with a contact form.', budget: 1000, deadline: '2024-08-30', skillsRequired: ['HTML', 'CSS', 'JavaScript'] }
  ];
  
  const filteredProjects = projects
    .filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "recent") return b.id - a.id;
      if (sortOption === "high-pay") return b.budget - a.budget;
      if (sortOption === "low-pay") return a.budget - b.budget;
      return 0;
    });

  return (
    <div className="software-development">
      <header className="header">
        <h1>Software Development Projects</h1>
        <p>
          Explore exciting software development projects to enhance your skills
          and build your portfolio!
        </p>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="recent">Most Recent</option>
          <option value="high-pay">High Pay</option>
          <option value="low-pay">Low Pay</option>
        </select>
      </div>

      <div className="project-listings">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project">
              <h2>{project.title}</h2>
              <p>Description: {project.description}</p>
              <p>Budget: ${project.budget}</p>
              <button>Apply Now</button>
            </div>
          ))
        ) : (
          <div className="no-results">No projects found.</div>
        )}
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
