import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <ul className="py-3 flex-column nav-link sm-flex-row">
        <li className="nav-item mb-3">
          <button
            className="sb-btn"
            onClick={(e) => {
              e.preventDefault();
              setClicked(!clicked);
            }}
          >
            Faculty of CSE
          </button>
        </li>

        {clicked && (
          <ul className="nav flex-column nav-link bg-light text-center">
            <li className="nav-item mb-3">
              <Link className="mb-3" to={'/table/project'}>
                <button className="sb-btn">Projects</button>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="sb-btn mb-3" to={'/table/thesis'}>
                <button className="sb-btn">Thesis</button>
              </Link>
            </li>
          </ul>
        )}

        <li className="nav-item mb-3">
          <button className="sb-btn">Services</button>
        </li>

        <li className="nav-item mb-3">
          <button className="sb-btn">Conatact</button>
        </li>

        <li className="nav-item mb-3">
          <button className="sb-btn">Blogs</button>
        </li>

        <li className="nav-item mb-3">
          <button className="sb-btn">Services</button>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
