// import axios from 'axios';
// import '../components/joblist.css';

// const API = import.meta.env.VITE_API_URL;

// const JobCard = ({ job, onUpdate, onDelete }) => {
//     const handleStatusChange = async (e) => {
//         const newStatus = e.target.value;
//         await axios.put(`${API}/jobs/${job._id}`, { ...job, status: newStatus });
//         onUpdate();
//     };

//     const handleDelete = async () => {
//         await axios.delete(`${API}/jobs/${job._id}`);
//         onDelete();
//     };

//     return (
//         <div className="p-3 border rounded my-2">
//             <h3>{job.company} – {job.role}</h3>
//             <p>Status:
//                 <select value={job.status} onChange={handleStatusChange}>
//                     <option>Applied</option>
//                     <option>Interview</option>
//                     <option>Offer</option>
//                     <option>Rejected</option>
//                 </select>
//             </p>
//             <p>Date: {job.date}</p>
//             {job.link && <a href={job.link} target="_blank">Job Link</a>}
//             <br />
//             <button onClick={handleDelete} className="text-red-500">Delete</button>
//         </div>
//     );
// };

// export default JobCard;
import axios from 'axios';
import '../components/jobcard.css';

const API = import.meta.env.VITE_API_URL;

const JobCard = ({ job, onUpdate, onDelete }) => {
    const handleStatusChange = async (e) => {
        const newStatus = e.target.value;
        try {
            await axios.put(`${API}/jobs/${job._id}`, { ...job, status: newStatus });
            onUpdate();
        } catch (error) {
            console.error('Status update failed:', error.response?.data || error.message);
        }
    };

    const handleDelete = async () => {
        const url = `${API}/jobs/${job._id}`;
        console.log('Delete button clicked. URL:', url); // ✅ Debug log
        try {
            await axios.delete(url);
            alert('✅ Job deleted successfully!');
            onDelete();
        } catch (error) {
            console.error('❌ Delete failed:', error.response?.data || error.message);
            alert('❌ Failed to delete job');
        }
    };

    return (
        <div className="p-2 border rounded my-2">
            <h3>{job.company} – {job.role}</h3>
            <p>Status:
                <select value={job.status} onChange={handleStatusChange}>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
            </p>
            <p>Date: {job.date}</p>
            {job.link && (
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                    Job Link
                </a>
            )}
            <br />
            <button onClick={handleDelete} className="text-red-500 hover:underline mt-2">
                🗑️ Delete
            </button>
        </div>
    );
};

export default JobCard;
