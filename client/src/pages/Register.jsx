import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../components/Form';

import '../styles/extra.css';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log({ data });
    // e.preventDefault();
    // const res = await axios.post('http://localhost:3000/api/user/create', {
    //   name: name,
    //   password: password,
    //   isSupervisor: isSupervisor,
    //   email: email,
    // });
    // const token = res.data.payload;
    // navigate('/');
    // // save token to local storage
    // localStorage.setItem('token', token);
  };

  const handleCheckbox = () => {
    setIsSupervisor(!isSupervisor);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="signup-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              class="mt-5 border p-4 bg-light shadow"
            >
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
                    {...register('name')}
                  />
                  <p className="wrn">{errors.name?.message}</p>
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
                    {...register('email')}
                  />
                  <p className="wrn">{errors.email?.message}</p>
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
                    {...register('password')}
                  />
                  <p className="wrn">{errors.password?.message}</p>
                </div>
                <div class="mb-3 col-md-12">
                  <label>
                    Confirm Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    class="form-control"
                    placeholder="Confirm Password"
                    {...register('confirmPassword')}
                  />
                  <p className="wrn">{errors.confirmPassword?.message}</p>
                </div>
                <div class="form-check ">
                  <input
                    class="form-check-input ml-2"
                    type="checkbox"
                    id="isSupervisor"
                    {...register('isSupervisor')}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Supervisor Account
                  </label>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-primary float-end">Signup Now</button>
                </div>
              </div>
            </form>
            <p class="text-center mt-3 text-secondary">
              If you have account, Please <Link to="/login">Login Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
