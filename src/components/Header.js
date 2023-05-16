import React from 'react';
import Logo from '../assets/Logo';
import Menu from './Menu';
import Logicon from './Logicon';

export default function Header() {
  return (
    <>
      <div className="header">
        <Logo />
        <Menu />
        <Logicon />
      </div>
      <div className="header-white"></div>
    </>
  );
}
