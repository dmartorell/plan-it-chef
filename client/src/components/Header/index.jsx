/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './style.scss';
import logo from '../../assets/logo-sm.png';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <figure>
        <img className="logo" src={logo} alt="logo" />
      </figure>
      <span className="user-name">Sylvia</span>
      <span className="iconify user-icon" data-icon="carbon:user-avatar-filled" data-inline="false" />
    </div>
    <div className="header__bottom">
      <form>
        <input className="form-control" type="text" size="38" placeholder="Paste recipe URL..." id="" name="" />
        <input className="form-btn" type="submit" />
      </form>
    </div>
  </header>
);

export default Header;
