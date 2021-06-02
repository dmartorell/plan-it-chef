import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Login = () => (
  <main className="canvas">
    <section className="container">
      <div className="main-logo">
        <figure>
          <img className="image" src="https://i.ibb.co/68MT8Jm/mamma-logo.png" alt="logo" />
        </figure>
        <div className="title">
          <h1 className="title__title">mamma</h1>
          <h3 className="title__subtitle">chef</h3>
        </div>
      </div>
      <span className="slogan">
        <p>it&apos;s</p>
        <p>cooking</p>
        <p>time!</p>
      </span>
      <div className="buttons">
        <Link className="main-button" to="/signup">
          <button className="signUp-btn" type="button">
            Sign up
          </button>
        </Link>
        <Link className="main-button" to="/login">
          <button className="logIn-btn" type="button">
            Log in
          </button>
        </Link>

      </div>
    </section>
  </main>
);

export default Login;
