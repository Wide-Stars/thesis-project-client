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
    <div className="container">
      <div className="register">
        <form onSubmit={handleSubmit}>
          <span className="formTitle">Login form</span>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="checkbox"
            placeholder="isSupervisor"
            onChange={handleCheckbox}
            checked={isSupervisor}
          />
          <button type="submit" className="submitButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
