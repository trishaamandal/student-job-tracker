import React, { useEffect, useState } from 'react';
import AddJobForm from './components/AddJobForm';
import Filter from './components/Filter';
import JobCard from './components/JobCard';
import './App.css'; // Optional: for custom app-level styles

const API = import.meta.env.VITE_API_URL;

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${API}/jobs`);
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddJob = () => {
    fetchJobs();
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const filteredJobs = filterStatus
    ? jobs.filter((job) => job.status === filterStatus)
    : jobs;

  return (
    <div className="app-container" style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '4rem', color: 'red', textAlign: 'center', fontWeight: '900' }}>
        Student Job Tracker
      </h1>

      <AddJobForm onJobAdded={handleAddJob} />
      <Filter onFilterChange={handleFilterChange} />
      <div className="job-list" style={{ marginTop: '12rem' }}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p>No jobs to display.</p>
        )}
      </div>
    </div>
  );
}

export default App;
