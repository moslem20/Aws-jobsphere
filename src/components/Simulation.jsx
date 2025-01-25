import React, { useState } from 'react';

const API_URL = 'https://mb543tz9be.execute-api.us-east-1.amazonaws.com/prod-sim';

export const startSimulation = async (userId, answers) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, answers })
        });

        if (!response.ok) {
            throw new Error('Error submitting data');
        }

        return await response.json();
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};


const Simulation = () => {
  const [jobRole, setJobRole] = useState('Software Engineer');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (answer.trim() === '') {
      alert('Please provide an answer');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userId = '12345'; // Replace with actual user ID
      const answers = { question1: answer }; // Replace with actual answers

      const result = await startSimulation(userId, answers);
      console.log('Simulation result:', result);
      alert('Simulation submitted successfully!');
    } catch (error) {
      console.error('Error submitting simulation:', error);
      setError('Failed to submit simulation. Please try again.');
    } finally {
      setLoading(false);
    }
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
      <button onClick={handleSubmit} className="btn-end" disabled={loading}>
        {loading ? 'Submitting...' : 'End Simulation'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Simulation;
