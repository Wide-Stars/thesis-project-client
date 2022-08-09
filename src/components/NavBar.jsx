import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
const navBar = () => {
  const navigate = useNavigate();

  // current location/url of the page
  const { pathname } = useLocation();

  const userId = localStorage.getItem('id');
  const isLogedin = localStorage.getItem('logedin');

  //logout button handler
  const logoutBtn = () => {
    localStorage.setItem('logedin', false);
    localStorage.removeItem('token');
    localStorage.removeItem('notify');
    localStorage.removeItem('id');

    navigate('/login');
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary-bg">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          Thesis Project
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
          <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/' ? 'active' : ''}  `}
                aria-current="page"
                to={'/'}
              >
                Home
              </Link>
            </li>
            {pathname === '/register' && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === '/login' ? 'active' : ''
                  }  `}
                  aria-current="page"
                  to={'/login'}
                >
                  Login
                </Link>
              </li>
            )}
            {pathname === '/login' && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === '/register' ? 'active' : ''
                  }  `}
                  aria-current="page"
                  to={'/register'}
                >
                  Register
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.slice(0, 8) === '/profile' ? 'active' : ''
                }  `}
                aria-current="page"
                to={'/profile/' + userId}
              >
                Profile
              </Link>
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
