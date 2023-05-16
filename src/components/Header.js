import React, {useEffect} from 'react';
import Logo from '../assets/Logo';
import Menu from './Menu';
import Logicon from './Logicon';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';

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
