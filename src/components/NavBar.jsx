import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const navBar = () => {
  const navigate = useNavigate();

  // current location/url of the page
  const { pathname } = useLocation();

  //logout button handler
  const logoutBtn = () => {
    localStorage.setItem('logedin', '0');
    localStorage.removeItem('token');
    navigate('/login');
  };

  console.log();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary-bg">
      <div className="container">
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
          </ul>

          {pathname == '/login' || pathname == '/register' ? null : (
            <button className="btn btn-secondary" onClick={logoutBtn}>
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default navBar;
