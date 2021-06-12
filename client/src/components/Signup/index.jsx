/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/actionCreators';

import './style.scss';

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');

  const sendNewUser = () => {
    const newUser = {
      email,
      firstName,
      password,
    };
    dispatch(signup(newUser));
    history.push('/');
  };

  return (
    <>
      <main className="signup-canvas">
        <section className="signup-container">

          <form className="form">
            <h1 className="form__title">Create an account</h1>

            <div className="form__fields">
              <label className="label" htmlFor="email">
                Email
                <br />
                <input className="input" type="text" onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="off" required />
              </label>

              <label className="label" htmlFor="firstName">
                First Name
                <br />
                <input className="input" type="text" onChange={(e) => setFirstName(e.target.value)} name="firstName" autoComplete="off" required />
              </label>
              <label className="label" htmlFor="password">
                Password
                <br />
                <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="off" required />
              </label>
            </div>
            <button
              className="solid-secondary-btn submit-btn"
              type="button"
              onClick={sendNewUser}
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Signup;
