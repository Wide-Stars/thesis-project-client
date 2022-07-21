import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../components/Form';

import '../styles/extra.css';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    // const res = await axios.post('http://localhost:3000/api/user/login', {
    //   email: email,
    //   password: password,
    // });
    // if (res.data.token) {
    //   localStorage.setItem('token', res.data.token);
    //   navigate('/');
    // } else {
    //   setWrn(true);
    // }
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
              <h4 class="mb-5 text-secondary">Login To Your Account</h4>
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    {...register('email')}
                  />
                </div>
                <p className="wrn">{errors.email?.message}</p>
                <div class="mb-3 col-md-12">
                  <label>Password</label>
                  <input
                    {...register('password')}
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                  />
                  <p className="wrn">{errors.password?.message}</p>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-primary float-end" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <p class="text-center mt-3 text-secondary">
              Don't have a account?
              <Link to="/register">Register Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
