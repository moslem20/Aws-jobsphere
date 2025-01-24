import React, { useState, useEffect } from 'react';
import Simulation from './Simulation';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [showSimulation, setShowSimulation] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');  // Redirect if no user found in local storage
    }
  }, [navigate]);

  const handleStartSimulation = () => {
    setShowSimulation(true);
  };

  const handleEndSimulation = (answers) => {
    const strengths = answers.includes('analytical') ? 'Strong analytical skills' : 'Good effort';
    const areasForImprovement = answers.includes('time management') ? 'Need better time management' : 'None';

    setFeedback({
      strengths,
      areasForImprovement,
    });

    setShowSimulation(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.email}</h2>
      <p>Streamlined and effective job preparation.</p>
      <div className="action-buttons">
        {!showSimulation && (
          <>
            <button onClick={handleStartSimulation} className="btn-primary">
              Start Interview Simulation
            </button>
            {feedback && (
              <button onClick={() => setShowSimulation('feedback')} className="btn-secondary">
                View Feedback
              </button>
            )}
          </>
        )}
      </div>

      {showSimulation === true && <Simulation onEndSimulation={handleEndSimulation} />}

      {showSimulation === 'feedback' && feedback && (
        <div className="feedback-container">
          <h3>Feedback</h3>
          <p><strong>Strengths:</strong> {feedback.strengths}</p>
          <p><strong>Areas for Improvement:</strong> {feedback.areasForImprovement}</p>
          <button onClick={() => setShowSimulation(false)} className="btn-primary">
            Retake Simulation
          </button>
        </div>
      )}

      <button onClick={handleLogout} className="btn-logout">Logout</button>
    </div>
  );
};

export default Dashboard;