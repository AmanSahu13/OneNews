// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              OneNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                
                 <li> <Link className="nav-link" to="/Business">Business</Link></li>
                 <li> <Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                 <li> <Link className="nav-link" to="/General">General</Link></li>
                 <li> <Link className="nav-link" to="/Health">Health</Link></li>
                 <li> <Link className="nav-link" to="/Science">Science</Link></li>
                 <li> <Link className="nav-link" to="/Sports">Sports</Link></li>
                 <li> <Link className="nav-link" to="/Technology">Technology</Link></li>
                
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  
}

export default Navbar;
