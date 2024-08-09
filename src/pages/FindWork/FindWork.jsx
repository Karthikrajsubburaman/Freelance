import React, { useState, useEffect } from "react";
import jobData from "../../data/jobData";
import "./FindWork.css";

const FindWork = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  // Filter jobs based on search query
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredJobs(
      jobData.filter((job) =>
        job.title.toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [searchQuery]);

  return (
    <div className="find-work">
      <h1 className="glow-text">Find Work</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

// Component for search bar
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    placeholder="Search for jobs..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="search-bar"
  />
);

// Component for job list
const JobList = ({ jobs }) => (
  <div className="job-list">
    {jobs.length === 0 ? (
      <p>No jobs found.</p>
    ) : (
      jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))
    )}
  </div>
);

// Component for individual job item
const JobItem = ({ job }) => (
  <div className="job-item">
    <h3>{job.title}</h3>
    <p>{job.description}</p>
    <a href={job.link} className="apply-button">Apply Now</a>
  </div>
);

export default FindWork;
