import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import AuthContext from "../auth/AuthContext";

export default function Login() {
 
  const [user, setUser] = useState(null)
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoging, setIsLoging] = useState(false);

  const logIn = async (e) => {
  
    e.preventDefault();
    setIsLoging(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const user = userCredential.user;
       setUser(user)
        navigate('/');
        setIsLoging(false);
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoging(false);
        console.log(errorCode, errorMessage);
      });
  };

  const createUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="login">
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
    </div>
  );
}
