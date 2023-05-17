import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login, currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoging, setIsLoging] = useState(false);
  const [error, setError] = useState("")

  
  async function handleSubmit(e) {
    e.preventDefault()
    try {
     
      setError("")
      setIsLoging(true);
      await login(email, password)
      
      //history.push("/")
      console.log("auth works!", currentUser.email)
    } catch {
      setError("Failed to log in")
    }
    setIsLoging(false);
  }

  async function handleLogout() {
    setError("")

    try {
      await logout()
     // history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }


    /* 

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


  const logIn = (e) => {
    e.preventDefault()
    setIsLoging(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const user = userCredential.user;
      setIsLoging(false);
      setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }; */
/* 
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
  */
  return (
    <div className="login">
          {currentUser? (
           <div className="logout">
            <p>Użytkownik jest zalogowany jako <b>{currentUser.email}</b></p>
            <button onClick={handleLogout} > Logout </button>
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
        <button className="btn-login" onClick={handleSubmit} disabled={!email}>
          {isLoging? "Logging...":"Login"}
        </button>
        <button className="btn-register" >
          Register
        </button>
      </form>
          )}
    </div>
  );
}
