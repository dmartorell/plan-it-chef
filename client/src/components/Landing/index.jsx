import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import mainImage from '../../assets/logo-sm.png';

const Landing = () => (
  <main className="canvas">
    <section className="landing-container">
      <div className="main-logo">
        <figure>
          <img className="image bounce-in-bck" src={mainImage} alt="logo" />
        </figure>
      </div>
      <span className="slogan scale-in-center-slogan">
        <p>it&apos;s</p>
        <p>cooking</p>
        <p>time!</p>
      </span>
      <div className="buttons">
        <Link to="/signup">
          <button type="button" className="solid-secondary-btn">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button type="button" className="transparent-btn">
            Log in
          </button>
        </Link>
      </div>
    </section>
  </main>
);

export default Landing;
