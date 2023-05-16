import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

export default function Logicon() {
const navigate = useNavigate();
  const logOut = (e) =>{
    e.preventDefault();
    signOut(auth).then(() => {
      // Sign-out successful.
         // navigate("/");
          console.log("Signed out successfully")
          console.log(auth.currentUser)
      }).catch((error) => {
      // An error happened.
      });
  }
  return (
    <>
      <div className="login-icon" onClick={logOut}>X</div>
    </>
  );
}
