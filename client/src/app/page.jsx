"use client"

import { useState, useCallback } from "react"
import AddJobForm from "../components/AddJobForm"
import JobList from "../components/JobList"

export default function Home() {
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    const handleJobAdded = useCallback(() => {
        // Increment the refresh trigger to cause JobList to refetch
        setRefreshTrigger((prev) => prev + 1)
    }, [])

    return (
        <div>
            <AddJobForm onJobAdded={handleJobAdded} />
            <JobList key={refreshTrigger} />
        </div>
    )
}
