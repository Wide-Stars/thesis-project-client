import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrPage from './pages/ErrPage';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<ErrPage />} /> */}
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
