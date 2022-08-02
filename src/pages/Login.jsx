import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import '../styles/extra.css';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data) => {
    const id = toast.loading('Please wait...');

    const res = await axios.post(
      'https://thesis-app-io.herokuapp.com/api/user/login',
      {
        email: data.email,
        password: data.password,
      }
    );
    if (res.data.token) {
      toast.update(id, {
        render: 'All is good',
        type: 'success',
        isLoading: false,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('logedin', '0');

      navigate('/');
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="signup-form">
            <form
              className="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h4 className="mb-5 text-secondary">Login To Your Account</h4>
              <div className="row">
                <div className="mb-3 col-md-12">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    {...register('email')}
                  />
                </div>
                <p className="wrn">{errors.email?.message}</p>
                <div className="mb-3 col-md-12">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    {...register('password')}
                  />
                  <p className="wrn">{errors.password?.message}</p>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary float-end">Login</button>
                </div>
                <ToastContainer />
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
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
