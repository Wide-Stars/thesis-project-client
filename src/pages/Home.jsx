import coverImg from '../assets/3016.jpg';
import '../styles/home.css';
import HomeNavbar from '../components/HomeNavbar';
import Post from '../components/Post';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('notify') === '0') {
      notify();
      localStorage.setItem('notify', '1');
    }
  }, []);
  const notify = () =>
    toast.success('Logged in Successfully', {
      autoClose: 5000,
    });

  return (
    <>
      <ToastContainer />
      <div className="main-container">
        <div className="h1-container">
          <h1>Thesis and project information</h1>
        </div>
        <img src={coverImg} alt="" />
      </div>

      <div className="row">
        {/* <div className="col-2">
          <ul class="list-group">
            <li
              class={`list-group-item ${clicked ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setClicked(!clicked);
              }}
            >
              faculty of cse
              {clicked && (
                <ul class="list-group">
                  <li class="list-group-item">
                    <Link to="/table/thesis">Thesis</Link>
                  </li>
                  <li class="list-group-item">
                    <Link to="/table/project">Projects</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div> */}
        <div className="col-2">
          <ul class="nav flex-column nav-link bg-light">
            <li class="nav-item mb-3">
              <button class="btn btn-outline-success my-2 my-sm-0 btn-sm">
                Accounting and information
              </button>
            </li>
            <li class="nav-item mb-3">
              <button
                class="btn btn-outline-success my-2 my-sm-0 btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  setClicked(!clicked);
                }}
              >
                faculty of computer science and engineering
              </button>
            </li>
            {clicked && (
              <ul className="nav flex-column nav-link bg-light text-center">
                <li class="nav-item mb-3">
                  <Link
                    class="btn btn-outline-danger my-2 my-sm-0 btn-sm"
                    to={'/table/project'}
                  >
                    Project
                  </Link>
                </li>
                <li class="nav-item mb-3">
                  <Link
                    class="btn btn-outline-danger my-2 my-sm-0 btn-sm"
                    to={'/table/thesis'}
                  >
                    thesis
                  </Link>
                </li>
              </ul>
            )}

            <li class="nav-item mb-3">
              <button class="btn btn-outline-success my-2 my-sm-0 btn-sm">
                Microbiology and cell biology
              </button>
            </li>
            <li class="nav-item mb-3">
              <button class="btn btn-outline-success my-2 my-sm-0 btn-sm">
                department of finance
              </button>
            </li>
          </ul>
        </div>
        <div className="col-10">
          <>
            <p className="mt-5">
              After your project or thesis is complete,&nbsp;approval signatures
              obtained,&nbsp;and passed departmental review, follow the steps
              below:
            </p>
            <div>
              <br />
            </div>
            <h5>Step 1: Reference Librarian</h5>
            <p>
              Projects/theses should be sent by{' '}
              <strong>email in PDF format</strong> to the Reference Librarian{' '}
              <a
                href="mailto:libref@denverseminary.edu"
                rel="noreferrer noopener"
                target="_blank"
              >
                libref@denverseminary.edu
              </a>
              . The margins must be 1.5 inches on the left and 1 inch on the
              right. The Library no longer accepts printed documents. The forms
              listed below should be submitted at the same time as the project
              or thesis.&nbsp;
            </p>
            <p>
              Your signature page may either be delivered physically to the
              Reference Librarian for scanning (and returned to you), emailed to
              the library and we’ll add it to the project/thesis, or you can
              scan it and add it to the PDF document before you email it to the
              Library
            </p>
            <div>
              <br />
            </div>
            <h5>Step 2: TREN Form</h5>
            <p>
              The{' '}
              <a
                href="https://denverseminary.edu/wp-content/uploads/2021/09/Tren-permission-form-2021-03-30.pdf"
                rel="noreferrer noopener"
                target="_blank"
              >
                TREN form
              </a>{' '}
              must be filled out. It allows for the project/thesis to be added
              to the Theological Research Exchange Network. The second half of
              the TREN form is if you choose to register your copyright of the
              thesis. You will need to provide the Reference Librarian a
              cashier’s check or money order for $85.00 made out to TREN to
              register the copyright. The form may be filled out and signed
              online, printed or saved electronically and submitted in person or
              by email to the{' '}
              <a
                href="mailto:libref@denverseminary.edu"
                rel="noreferrer noopener"
                target="_blank"
              >
                Reference Librarian
              </a>
              .
            </p>
            <div>
              <br />
            </div>
            <h5>Step 3: Open Repository Form</h5>
            <p>
              The{' '}
              <a
                href="https://denverseminary.edu/wp-content/uploads/2021/09/Open-repository-permission-fillable-sign.pdf"
                rel="noreferrer noopener"
                target="_blank"
              >
                Open Repository form
              </a>{' '}
              gives the library permission to make the project/thesis available
              publicly through the library catalogs. The form should be
              completed and signed online, printed or saved electronically, and
              submitted to the{' '}
              <a
                href="mailto:libref@denverseminary.edu"
                rel="noreferrer noopener"
                target="_blank"
              >
                Reference Librarian
              </a>
              .
            </p>
            <div>
              <br />
            </div>
            <h5>Step 4 (D.Min Students): RIM Form</h5>
            <p>
              Doctor of Ministry students fill out the{' '}
              <a
                href="https://4a237a6396211b46a519-07bb804b57961d253f8e71486003596d.ssl.cf2.rackcdn.com/uploaded/r/0e9823080_1580938256_research-in-ministry-project-submission-form-fillable.pdf"
                rel="noreferrer noopener"
                target="_blank"
              >
                Research in&nbsp;
              </a>
              <a
                href="https://denverseminary.edu/wp-content/uploads/2021/09/Research-in-ministry-project-submission-form-fillable.pdf"
                rel="noreferrer noopener"
                target="_blank"
              >
                Ministry
              </a>
              <a
                href="https://4a237a6396211b46a519-07bb804b57961d253f8e71486003596d.ssl.cf2.rackcdn.com/uploaded/r/0e9823080_1580938256_research-in-ministry-project-submission-form-fillable.pdf"
                rel="noreferrer noopener"
                target="_blank"
              >
                &nbsp;(RIM) form
              </a>{' '}
              to be included in the index of projects and theses that Doctor of
              Ministry and Doctor of Missiology have written. &nbsp;RIM provides
              access to abstracts for researching practical aspects of religious
              ministry. The form should be filled out, signed online, printed or
              saved electronically and submitted to the{' '}
              <a
                href="mailto:libref@denverseminary.edu"
                rel="noreferrer noopener"
                target="_blank"
              >
                Reference Librarian
              </a>
              .
            </p>
            <div>
              <br />
            </div>
            <h5>Thesis/Project Binding</h5>
            <p>
              The library no longer binds copies of the projects/theses. If the
              student wishes a bound copy of their thesis they may contact&nbsp;
              <a
                href="https://www.denverbook.com/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Denver Bookbinding
              </a>{' '}
              or other bindery of their choice. The student is financially
              responsible for the binding process.
            </p>
            <p>
              <strong>The following parameters are typical for binding:</strong>
            </p>
            <ul>
              <li>Margins: 1.5-inch left margin, 1-inch right margin</li>
              <li>
                Paper: white, acid free, that is 20 or 24 lb, and at least 25%
                cotton fiber
              </li>
              <li>The following parameters are typical for binding:</li>
            </ul>
            <p>
              Please contact the{' '}
              <a
                href="mailto:libref@denverseminary.edu"
                rel="noreferrer noopener"
                target="_blank"
              >
                Reference Librarian
              </a>{' '}
              if you have questions.
            </p>
          </>
        </div>
      </div>
    </>
  );
};

export default Home;
