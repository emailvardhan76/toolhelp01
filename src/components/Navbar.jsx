import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TOOL help</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/usecases">USECASES</Link>
        <Link to="/reviews">APPRAISALS</Link>
      </div>
    </nav>
  );
};

export default Navbar;
