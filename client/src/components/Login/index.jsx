/* eslint-disable no-console */
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import './style.scss';
import mainImage from '../../assets/logo-bg.png';
import { login } from '../../redux/actions/actionCreators';

const Login = () => {
  const storeUser = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(storeUser.token);
  }, [storeUser]);

  const sendUser = () => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    // history.push('/recipes');
  };

  return (

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
        <form>
          <h1>Log In</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
            <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} name="email" required />
          </label>
          <label htmlFor="password">
            <b>Password</b>
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} name="password" required />
          </label>
          <button
            type="button"
            onClick={sendUser}
          >
            Log In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
