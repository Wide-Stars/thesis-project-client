import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                                    className={`nav-link ${pathname === '/login' ? 'active' : ''
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
                                    className={`nav-link ${pathname === '/register' ? 'active' : ''
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
                                className={`nav-link ${pathname.slice(0, 8) === '/profile' ? 'active' : ''
                                    }  `}
                                aria-current="page"
                                to={'/profile/' + userId}
                            >
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Faculty of CSE</a></li>
                                <li><a className="dropdown-item" href="#">Services</a></li>
                                <li><a className="dropdown-item" href="#">Contact</a></li>
                                <li><a className="dropdown-item" href="#">Blogs</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        
                    </form>
                    {pathname == '/login' || pathname == '/register' ? null : (
                            <button className="btn btn-secondary" onClick={logoutBtn}>
                                Log out
                            </button>
                        )}
                </div>
            </div >
        </nav >
    );
};

export default Header;