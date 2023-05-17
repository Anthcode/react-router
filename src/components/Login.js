import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth, } from '../firebase/firebase';
import AuthContext from "../auth/AuthContext";

export default function Login({user, setUser}) {
 
 // const [user, setUser] = useState(null)
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoging, setIsLoging] = useState(false);



   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);  


  const logIn = async (e) => {
    e.preventDefault()
    setIsLoging(true);
    try{
        const user = await signInWithEmailAndPassword(auth, email, password)
        navigate('/');
        setIsLoging(false);
        setUser(user)
        console.log(user)
      }
      catch(error) {
        setIsLoging(false);
        console.log(errorcode, errormessage);
      };
  };

  const createUser =  (e) => {
    e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const user = userCredential.user;
      setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
         // navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      console.log(errorcode, errormessage);
      });
  }
  return (
    <div className="login">
          {user ? (
           <div className="logout">
            <p>Użytkownik jest zalogowany jako <b>{user.email}</b></p>
            <button onClick={logOut}> Logout </button>
            </div>
          ) : (
            <form>
        <h2>Login</h2>
        <div className="input-div">
          <input
            type="email"
            placeholder="your@email.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="passwd"
            name="passwd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login" onClick={logIn} disabled={!email}>
          {isLoging? "Logging...":"Login"}
        </button>
        <button className="btn-register" onClick={createUser}>
          Register
        </button>
      </form>
          )}
    </div>
  );
}
