import React, { useEffect, useState } from 'react';
import './BrowseFreelancers.css';

const mockFreelancers = [
    {
      id: 1,
      name: "Aarav Patel",
      skills: ["React", "Node.js"],
      rating: 4.7,
      profilePicture: "https://via.placeholder.com/150",
      location: "Mumbai, India",
      hourlyRate: "$45/hr",
      experience: "5 years",
      availability: "Available",
      bio: "Experienced full-stack developer with a strong background in React and Node.js. Passionate about creating high-quality, scalable web applications."
    },
    {
      id: 2,
      name: "Isha Sharma",
      skills: ["Python", "Django"],
      rating: 4.9,
      profilePicture: "https://via.placeholder.com/150",
      location: "Bengaluru, India",
      hourlyRate: "$55/hr",
      experience: "6 years",
      availability: "Available",
      bio: "Skilled Python developer specializing in Django. Adept at building robust and secure web applications with a focus on clean code and efficient design."
    },
    {
      id: 3,
      name: "Rohan Mehta",
      skills: ["JavaScript", "Vue.js"],
      rating: 4.6,
      profilePicture: "https://via.placeholder.com/150",
      location: "Delhi, India",
      hourlyRate: "$50/hr",
      experience: "4 years",
      availability: "Available",
      bio: "Frontend developer with expertise in JavaScript and Vue.js. Known for creating visually appealing and user-friendly interfaces with a keen eye for detail."
    },
    {
      id: 4,
      name: "Priya Singh",
      skills: ["Java", "Spring Boot"],
      rating: 4.8,
      profilePicture: "https://via.placeholder.com/150",
      location: "Hyderabad, India",
      hourlyRate: "$60/hr",
      experience: "7 years",
      availability: "Not Available",
      bio: "Seasoned backend developer specializing in Java and Spring Boot. Proficient in building scalable and secure server-side applications."
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      skills: ["PHP", "Laravel"],
      rating: 4.5,
      profilePicture: "https://via.placeholder.com/150",
      location: "Chennai, India",
      hourlyRate: "$40/hr",
      experience: "5 years",
      availability: "Available",
      bio: "Experienced web developer with strong expertise in PHP and Laravel. Committed to delivering high-performance, dynamic web applications."
    },
    {
      id: 6,
      name: "Sneha Rao",
      skills: ["Swift", "iOS Development"],
      rating: 4.7,
      profilePicture: "https://via.placeholder.com/150",
      location: "Pune, India",
      hourlyRate: "$65/hr",
      experience: "5 years",
      availability: "Available",
      bio: "Skilled iOS developer with experience in Swift. Passionate about creating intuitive and engaging mobile applications for iOS devices."
    },
  ];
  

const BrowseFreelancers = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    setFreelancers(mockFreelancers);
    console.log("Freelancers data:", mockFreelancers); 
  }, []);

  return (
    <div className="browse-freelancers">
      <h1>Browse Freelancers</h1>
      <div className="freelancer-list">
        {freelancers.length === 0 ? (
          <p>No freelancers available.</p>
        ) : (
          freelancers.map((freelancer) => (
            <div key={freelancer.id} className="freelancer-card">
              <div className="profile-picture-container">
                <img src={freelancer.profilePicture} alt={freelancer.name} className="profile-picture" />
              </div>
              <div className="freelancer-info">
                <h2>{freelancer.name}</h2>
                <p><strong>Skills:</strong> {freelancer.skills.join(', ')}</p>
                <p><strong>Rating:</strong> {freelancer.rating} / 5</p>
                <p><strong>Location:</strong> {freelancer.location}</p>
                <p><strong>Hourly Rate:</strong> {freelancer.hourlyRate}</p>
                <p><strong>Experience:</strong> {freelancer.experience}</p>
                <p><strong>Availability:</strong> {freelancer.availability}</p>
                <p><strong>Bio:</strong> {freelancer.bio}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseFreelancers;
