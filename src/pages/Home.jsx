import coverImg from '../assets/3016.jpg';
import '../styles/home.css';
import HomeNavbar from '../components/HomeNavbar';
import Post from '../components/Post';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

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


      <div className="row">
        <div className="col-lg-2 bg-sidebar">

          <Sidebar />

        </div>
        
        <div className="col-10">
          <div className="main-container">
            <div className="h1-container">
              <h1>Thesis and project information</h1>
            </div>
            {/* <img src={coverImg} alt="" /> */}
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Home;
