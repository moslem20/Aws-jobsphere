import React, { useState } from 'react';

const Simulation = ({ onEndSimulation }) => {
  const [jobRole, setJobRole] = useState('Software Engineer');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.trim() === '') {
      alert('Please provide an answer');
      return;
    }
    onEndSimulation(answer.toLowerCase());
  };

  return (
    <div className="simulation">
      <h3>Interview Simulation</h3>
      <label>Select Job Role:</label>
      <select value={jobRole} onChange={(e) => setJobRole(e.target.value)}>
        <option>Software Engineer</option>
        <option>Data Scientist</option>
      </select>
      <textarea
        placeholder="AI: What is your greatest strength?"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows="3"
      ></textarea>
      <button onClick={handleSubmit} className="btn-end">End Simulation</button>
    </div>
  );
};

export default Simulation;