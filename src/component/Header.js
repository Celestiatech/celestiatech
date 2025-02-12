import React from 'react';
import './Header.css'; // Import the CSS file
import '../App.css'; // Import the global CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow" >
        <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="logo logo-orange">
              <span className="logo-text">CE</span>
              <span className="logo-text">LESTIA</span>
            </div>
            <div className="logo logo-orange">
              <span className="logo-text">TECH</span>
            </div>
          </a>

          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler" // Add this line
            type="button" // Add this line
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Mobile App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Web</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Game</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">AI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blockchain</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Design</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="#">Service 1</a></li>
                  <li><a className="dropdown-item" href="#">Service 2</a></li>
                </ul>
              </li>
              {/* Add more dropdowns for Industries, Portfolio, Company */}
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
