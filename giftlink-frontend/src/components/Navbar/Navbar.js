import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Brand */}
      <Link className="navbar-brand" to="/">GiftLink</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Home */}
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          {/* Gifts → Main page */}
          <li className="nav-item">
            <Link className="nav-link" to="/app">Gifts</Link>
          </li>

          {/* Search */}
          <li className="nav-item">
            <Link className="nav-link" to="/app/search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
