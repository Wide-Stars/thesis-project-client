import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const ProtectedRoute = () => {
  const auth = localStorage.getItem('token');

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
