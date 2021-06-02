import React from 'react';
import './style.scss';
import logo from '../../assets/logo-sm.png';

const Header = () => (
  <header className="header">
    <figure>
      <img className="header__logo" src={logo} alt="logo" />
    </figure>
    <span className="header__user-name">Sylvia</span>
  </header>
);

export default Header;
