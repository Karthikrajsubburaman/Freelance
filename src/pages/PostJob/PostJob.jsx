import React, { useState } from 'react';
import './PostJob.css';

const PostJob = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    skills: '',
    budget: '',
    deadline: '',
    files: []
  });

  const [postedJob, setPostedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleFileChange = (e) => {
    setJob((prevJob) => ({ ...prevJob, files: Array.from(e.target.files) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostedJob(job);
    setModalOpen(true);
    setJob({
      title: '',
      description: '',
      skills: '',
      budget: '',
      deadline: '',
      files: []
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="post-job">
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit} className="post-job-form">
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={job.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={job.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills Required</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={job.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={job.budget}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={job.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="files">Upload Files</label>
          <input
            type="file"
            id="files"
            name="files"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-button">Post Job</button>
      </form>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Job Posted</h2>
            <div className="job-details">
              <p><strong>Title:</strong> {postedJob.title}</p>
              <p><strong>Description:</strong> {postedJob.description}</p>
              <p><strong>Skills Required:</strong> {postedJob.skills}</p>
              <p><strong>Budget:</strong> ${postedJob.budget}</p>
              <p><strong>Deadline:</strong> {postedJob.deadline}</p>
              <div><strong>Files:</strong>
                <ul>
                  {postedJob.files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
              <p><strong>Status:</strong> Open</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostJob;