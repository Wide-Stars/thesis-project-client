import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const navBar = () => {
  const navigate = useNavigate();

  // current location/url of the page
  const { pathname } = useLocation();

  //logout button handler
  const logoutBtn = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  console.log();

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Thesis Project
        </a>
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
          <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
          // dynamic logout button
          {pathname == '/login' || pathname == '/register' ? null : (
            <button onClick={logoutBtn}>Log out</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default navBar;
