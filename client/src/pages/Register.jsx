import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSupervisor, setIsSupervisor] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/user/create', {
      name: name,
      password: password,
      isSupervisor: isSupervisor,
      email: email,
    });
    console.log(res);
  };

  const handleCheckbox = () => {
    setIsSupervisor(!isSupervisor);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="signup-form">
            <form action="" class="mt-5 border p-4 bg-light shadow">
              <h4 class="mb-5 text-secondary">Create Your Account</h4>
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label>
                    Name<span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter Name"
                  />
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                    Email<span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                    Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div class="mb-3 col-md-12">
                  <label>
                    Confirm Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    class="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <div class="form-check ">
                  <input
                    class="form-check-input ml-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-primary float-end">Signup Now</button>
                </div>
              </div>
            </form>
            <p class="text-center mt-3 text-secondary">
              If you have account, Please <a href="#">Login Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
