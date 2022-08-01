import coverImg from '../assets/3016.jpg';
import '../styles/home.css';
import HomeNavbar from '../components/HomeNavbar';
import Post from '../components/Post';
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="h1-container">
          <h1>Thesis and project information</h1>
        </div>
        <img src={coverImg} alt="" />
      </div>

      <HomeNavbar />
      <div className="d-flex justify-content-between">
        <div>
          <ul>
            <li>dummy data</li>
            <li>dummy data</li> <li>dummy data</li> <li>dummy data</li>
            <li>dummy data</li> <li>dummy data</li> <li>dummy data</li>
            <li>dummy data</li> <li>dummy data</li> <li>dummy data</li>
          </ul>
        </div>
        <div>
          <Post />
        </div>
      </div>
    </>
  );
};

export default Home;
