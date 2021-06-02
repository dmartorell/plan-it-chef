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
        <button className="signUp-btn" type="button">
          <Link className="main-button" to="/signup">Sign up</Link>
        </button>
        <button className="logIn-btn" type="button">
          <Link className="main-button" to="/login">Log in</Link>
        </button>
      </div>
    </section>
  </main>
);

export default Login;
