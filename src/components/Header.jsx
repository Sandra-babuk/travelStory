import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold" href="#">
          Travel Diaries
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light fs-5" aria-current="page" href="home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="dashboard">
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="">
                  contact
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
