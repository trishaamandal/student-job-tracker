import { useState } from 'react';
import axios from 'axios';
import '../components/Addjobfrom.css';

const API = import.meta.env.VITE_API_URL;


const AddJobForm = ({ onJobAdded }) => {
    const [formData, setFormData] = useState({
        company: '',
        role: '',
        status: 'Applied',
        date: '',
        link: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${API}/jobs`, formData);
        onJobAdded();  // refresh job list
        setFormData({ company: '', role: '', status: 'Applied', date: '', link: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
            <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
            <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>
            <input name="date" type="date" value={formData.date} onChange={handleChange} required />
            <input name="link" placeholder="Application Link" value={formData.link} onChange={handleChange} />
            {/* <button type="submit">Add Job</button> */}
            <button
                type="submit"
                style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#e6f7ff',
                    color: '#007acc',
                    border: 'none',
                    borderRadius: '2rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    float: 'right',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#b3e5fc';
                    e.target.style.color = '#005a99';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#e6f7ff';
                    e.target.style.color = '#007acc';
                }}
            >
                Add Job
            </button>

        </form>
    );
};

export default AddJobForm;
