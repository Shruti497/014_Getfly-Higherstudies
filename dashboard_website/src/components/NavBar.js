import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/past-seminars">Past Seminars</Link></li>
        <li><Link to="/seminar-applications">Seminar Applications</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
