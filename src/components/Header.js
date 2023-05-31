import React, { useEffect } from 'react';
import Logo from '../assets/Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <>
      <div className="header">

        <Logo />
        <Menu />


      </div>
      <div className="header-white"></div>
    </>
  );
}
