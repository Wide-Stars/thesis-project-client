import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await axios.post('http://localhost:3000/api/user/login', {
    //   email: email,
    //   password: password,
    // });
    console.log(email, password);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="signup-form">
            <form
              onSubmit={handleSubmit}
              class="mt-5 border p-4 bg-light shadow"
            >
              <h4 class="mb-5 text-secondary">Login To Your Account</h4>
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3 col-md-12">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="col-md-12">
                  <button class="btn btn-primary float-end" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <p class="text-center mt-3 text-secondary">
              Don't have a account? <a href="#">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
