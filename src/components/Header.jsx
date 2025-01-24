import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>JobSphere AI</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">@@@@</Link>
        <Link to="/contact">@@@</Link>
      </nav>
    </header>
  );
};

export default Header;