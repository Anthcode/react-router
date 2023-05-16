import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

export default function Logicon() {
//const [isLogged, setIsLogged] = useState(true)
const navigate = useNavigate();
  const logOut = async(e) =>{

    await signOut(auth).then(() => {
      // Sign-out successful.
         // navigate("/");
          console.log("Signed out successfully")
          console.log(auth.currentUser)
         // setIsLogged(!isLogged)
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
