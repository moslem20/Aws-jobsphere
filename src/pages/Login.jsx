import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      // Save user data to local storage
      localStorage.setItem('user', JSON.stringify({ email }));
      handleAuthentication(true);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to JobSphere AI</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;