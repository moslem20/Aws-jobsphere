import React from 'react';

const jobs = [
  { id: 1, title: 'Software Engineer', location: 'New York' },
  { id: 2, title: 'Data Scientist', location: 'San Francisco' }
];

const JobList = () => {
  return (
    <div className="job-list">
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;