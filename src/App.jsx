import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrPage from './pages/ErrPage';
import Table from './pages/table';

import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import EditPost from './pages/EditPost';
import Post from './pages/Post';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrPage />} />
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="" element={<Home />} />
          <Route path="table/:type" element={<Table />}></Route>
          <Route path="edit-post/:id" element={<EditPost />}></Route>
          <Route path="add-post" element={<EditPost />}></Route>

          <Route path="post/:id" element={<Post />}></Route>
          <Route path="profile/:id" element={<Profile />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
