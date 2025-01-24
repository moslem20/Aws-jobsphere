import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';

function App() {
  // Manage authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleAuthentication={handleAuthentication} />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;