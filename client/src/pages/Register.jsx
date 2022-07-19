import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSupervisor, setIsSupervisor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword, isSupervisor);
  };

  const handleCheckbox = () => {
    setIsSupervisor(!isSupervisor);
  };

  return (
    <div className="container">
      <div className="register">
        <form onSubmit={handleSubmit}>
          <span className="formTitle">Lama Login</span>
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
