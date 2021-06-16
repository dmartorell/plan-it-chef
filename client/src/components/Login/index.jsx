/* eslint-disable no-console */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.scss';
import { login } from '../../redux/actions/actionCreators';

const Login = () => {
  const storeUser = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendUser = () => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (storeUser.token) {
    return <Redirect to="/recipes" />;
  }

  return (
    <main className="signup-canvas">
      <section className="signup-container">
        <form className="form">
          <h1 className="form__title">Log in</h1>
          <div className="form__fields">
            <label className="label" htmlFor="email">
              Email
              <br />
              <input className="input" type="text" onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="off" required data-testId="email-login" />
            </label>
            <label className="label" htmlFor="password">
              Password
              <br />
              <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="off" required data-testid="password-login" />
            </label>
          </div>
          <button
            className="transparent-btn submit-btn letsCook-btn"
            type="button"
            onClick={sendUser}
          >
            {'Let\'s cook!'}
            <i className="iconify arrow-icon" data-icon="entypo:arrow-long-right" data-inline="false" />

          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
