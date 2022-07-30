import coverImg from '../assets/3016.jpg';
import '../styles/home.css';
const Home = () => {
  return (
    <div className="main-container">
      <div className="h1-container">
        <h1>Thesis and project information</h1>
      </div>
      <img src={coverImg} alt="" />
    </div>
  );
};

export default Home;
