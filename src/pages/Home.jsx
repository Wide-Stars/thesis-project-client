import '../styles/home.css';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../components/Banner';
import Team from '../components/Team';
import ThesisHome from '../components/ThesisHome';
import ProjectHome from '../components/ProjectHome';

const Home = () => {


  return (
    <>
      <Banner />
      <ThesisHome />
      <ProjectHome />
      <Team />
    </>
  );
};

export default Home;
