import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import Filter from './Filter';
import '../components/joblist.css';

const API = import.meta.env.VITE_API_URL;

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');

    const fetchJobs = async () => {
        const res = await axios.get(`${API}/jobs`);
        setJobs(res.data);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const filteredJobs = filterStatus
        ? jobs.filter(job => job.status === filterStatus)
        : jobs;

    return (
        <div>
            <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
            {filteredJobs.map(job => (
                <JobCard
                    key={job._id}
                    job={job}
                    onUpdate={fetchJobs}
                    onDelete={fetchJobs}
                />
            ))}
        </div>
    );
};

export default JobList;
