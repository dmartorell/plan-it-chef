/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './style.scss';
import { Icon } from '@iconify/react';
import userAvatarFilled from '@iconify-icons/carbon/user-avatar-filled';
import logo from '../../assets/logo-sm.png';

const Header = () => (
  <header className="header">
    <figure>
      <img className="header__logo" src={logo} alt="logo" />
    </figure>
    <span className="header__user-name">Sylvia</span>
    <Icon icon={userAvatarFilled} color="#FAFAFA" />
  </header>
);

export default Header;
