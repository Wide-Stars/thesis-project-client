import React from 'react';

const Footer = () => {
  return (
    <div>
      {' '}
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2);"
        >
          © 2022 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Thesis world
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
