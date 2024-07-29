import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/one-life-logo-white.png";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent py-0">
        <div className="container">
          <Link className="navbar-brand text-white py-0" to="/">
            <img src={logo} alt='OneLife Health' />
          </Link>
          <button
            className={`navbar-toggler shadow-none ms-2 ${isCollapsed ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div className={`collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ${isCollapsed ? '' : 'show'}`} id="navigation">
            <ul className="navbar-nav navbar-nav-hover ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/about-us">
                  About us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/contact-us">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
