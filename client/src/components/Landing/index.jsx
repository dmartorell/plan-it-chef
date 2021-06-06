import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import mainImage from '../../assets/logo-bg.png';

const Landing = () => (
  <main className="canvas">
    <section className="landing-container">
      <div className="main-logo">
        <figure>
          <img className="image" src={mainImage} alt="logo" />
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
        <button className="signUp" type="button">
          <Link className="signUp-btn" to="/signup">
            Sign up
          </Link>
        </button>
        <button className="logIn" type="button">
          <Link className="logIn-btn" to="/login">
            Log in
          </Link>
        </button>
      </div>
    </section>
  </main>
);

export default Landing;
