import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import '../styles/extra.css';
import loginImg from '../assets/images/login.png';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const id = toast.loading('Please wait...');

    try {
      const res = await axios.post(
        'http://localhost:https://thesis-app-io.herokuapp.com0/api/user/create',
        {
          name: data.name,
          password: data.password,
          batch: data.batch,
          email: data.email,
          avatar: Math.round(Math.random() * 8),
        }
      );
      console.log(res);
      // update post and logedin value

      localStorage.setItem('logedin', '0');

      const token = res.data.payload;
      // save token to local storage
      localStorage.setItem('token', token);
      navigate('/login');
    } catch (err) {
      toast.update(id, {
        render: 'Something went wrong. Please try again',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="secondary-bg vh-120">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center mb-5">
                <span className="primary-highlighter">Signup </span>
                <span className="text-light">For Your Account</span>
              </h1>

              <div className="mb-3 col-md-12">
                <label className="mb-3 text-light">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control "
                  placeholder="Enter Name"
                  {...register('name')}
                />
                <p className="wrn">{errors.name?.message}</p>
              </div>

              <div className="mb-3 col-md-12">
                <label className="mb-3 text-light">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control "
                  placeholder="Enter Email"
                  {...register('email')}
                />
                <p className="wrn">{errors.email?.message}</p>
              </div>
              <div className="mb-3 col-md-12">
                <label className="mb-3 text-light">
                  Password<span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control "
                  placeholder="Enter Password"
                  {...register('password')}
                />
                <p className="wrn">{errors.password?.message}</p>
              </div>
              <div className="mb-3 col-md-12">
                <label className="mb-3 text-light">
                  Confirm Password<span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  className="form-control "
                  placeholder="Confirm Password"
                  {...register('confirmPassword')}
                />
                <p className="wrn">{errors.confirmPassword?.message}</p>
              </div>
              <div className="mb-3 col-md-12">
                <label className="mb-3 text-light">
                  Batch<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="batch"
                  className="form-control "
                  placeholder="Enter your batch name"
                  {...register('batch')}
                />
                <p className="wrn">{errors.batch?.message}</p>
              </div>

              <div className="col-md-12">
                <button className="btn btn-primary float-end">
                  Signup Now
                </button>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              If you have account, Please <Link to="/login">Login Now</Link>
            </p>
          </div>

          <div className="col-md-6 my-5 py-5 text-center">
            <img
              className="my-5"
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

export default Register;
