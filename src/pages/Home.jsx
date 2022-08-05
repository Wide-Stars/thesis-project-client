import coverImg from '../assets/3016.jpg';
import '../styles/home.css';
import HomeNavbar from '../components/HomeNavbar';
import Post from '../components/Post';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem('logedin') === '0') {
      notify();
      localStorage.setItem('logedin', '1');
    }
  }, []);
  const notify = () =>
    toast.success('Logged in Successfully.', {
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

      <HomeNavbar />
      <div className="d-flex justify-content-between">
        <div className="col-2">
          <nav class="navbar bg-light" p-5>
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <a class="nav-link m-3" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link m-3" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link m-3" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link m-3" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Post />
        </div>
      </div>
    </>
  );
};

export default Home;
