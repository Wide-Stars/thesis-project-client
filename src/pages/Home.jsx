import '../styles/home.css';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../components/Banner';
import Team from '../components/Team';
import ThesisHome from '../components/ThesisHome';
import ProjectHome from '../components/ProjectHome';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <ThesisHome />
      <ProjectHome />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
