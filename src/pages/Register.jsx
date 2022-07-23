import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../components/Form';

import '../styles/extra.css';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log({ data });

    const res = await axios.post(
      'https://thesis-project-io.herokuapp.com/api/user/create',
      {
        name: data.name,
        password: data.password,
        isSupervisor: data.isSupervisor,
        email: data.email,
      }
    );
    const token = res.data.payload;
    console.log(token);
    // save token to local storage
    localStorage.setItem('token', token);

    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="signup-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-5 border p-4 bg-light shadow"
            >
              <h4 className="mb-5 text-secondary">Create Your Account</h4>
              <div className="row">
                <div className="mb-3 col-md-12">
                  <label>
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    {...register('name')}
                  />
                  <p className="wrn">{errors.name?.message}</p>
                </div>

                <div className="mb-3 col-md-12">
                  <label>
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    {...register('email')}
                  />
                  <p className="wrn">{errors.email?.message}</p>
                </div>

                <div className="mb-3 col-md-12">
                  <label>
                    Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    {...register('password')}
                  />
                  <p className="wrn">{errors.password?.message}</p>
                </div>
                <div className="mb-3 col-md-12">
                  <label>
                    Confirm Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    className="form-control"
                    placeholder="Confirm Password"
                    {...register('confirmPassword')}
                  />
                  <p className="wrn">{errors.confirmPassword?.message}</p>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input ml-2"
                    type="checkbox"
                    id="isSupervisor"
                    {...register('isSupervisor')}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Supervisor Account
                  </label>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary float-end">
                    Signup Now
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              If you have account, Please <Link to="/login">Login Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
