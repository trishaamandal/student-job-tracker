import '../components/filter.css';

const Filter = ({ filterStatus, setFilterStatus }) => {
    return (
        <div className="filterContainer">
            <label className="filterLabel">Filter by Status:</label>
            <select className="filterSelect" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="">All Applications</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>
        </div>
    );
};
export default Filter;