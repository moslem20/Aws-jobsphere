import React, { useState } from 'react';

const JobSearch = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default JobSearch;