import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import '../styles/extra.css';
import loginImg from '../assets/images/login.png';

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
      localStorage.setItem('id', res.data.id);

      navigate('/');
    }
  };
  return (
    <div className="secondary-bg vh-100">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 py-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center mb-5">
                <span className="primary-highlighter">Login </span>
                <span className="text-light">To Your Account</span>
              </h1>
              <div className="mb-3 col-md-12">
                <label className="mb-3 text-light">Enter yout email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control "
                  placeholder="Enter Email"
                  {...register('email')}
                />
              </div>
              <p className="wrn">{errors.email?.message}</p>
              <div className="mb-3 col-md-12">
                <label className="mb-3 text-light">Enter your password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control "
                  placeholder="Enter Password"
                  {...register('password')}
                />
                <p className="wrn">{errors.password?.message}</p>
              </div>
              <div className="col-md-12">
                <button className="btn btn-primary float-end">Login</button>
                <ToastContainer />
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              Don't have a account?
              <Link to="/register">Register Now</Link>
            </p>
          </div>
          <div className="col-md-6 py-5 text-center">
            <img
              src="https://images.indianexpress.com/2020/04/books_759.jpg"
              height="70%"
              alt="loginImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
