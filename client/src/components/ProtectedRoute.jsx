import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const ProtectedRoute = () => {
  let auth = true;
  const token = useSelector((state) => state.user);
  // if(!token) {
  //   auth = false
  // } else{

  // }
  console.log(token);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
