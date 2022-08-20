import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white footer">
        <div className="container p-4">

          
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Thesis PRojects</h5>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae voluptate corporis aut! Sed omnis id enim dolorum amet itaque obcaecati delectus nisi sit harum!</p>

              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Sortcut</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/home" className="text-white lnk">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-white lnk">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/table/project" className="text-white lnk">
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/table/thesis" className="text-white lnk">
                      Thesis
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contacts</h5>
                  <p>address</p>
                  <p>phone</p>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <span className="mr-3">© Copyright 2022: </span>
          <Link className="text-white navbar-brand" to="/">
            Thesis World
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
