import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Login() {
  const [login, setLogin] = useState({});

  const signIn = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    setLogin(formObject);

    /*    await createUserWithEmailAndPassword(auth, login.email, login.passwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      }); */

    await signInWithEmailAndPassword(auth, login.email, login.passwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="login">
      <form onSubmit={signIn}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="your@email.com"
          name="email"
          // onChange={signIn}
        />
        <input
          type="password"
          placeholder="passwd"
          name="passwd"
          // onChange={signIn}
        />
        <button className="btn-login" type="submit">
          Log in
        </button>
        <h3>{login.email}</h3>
        <h3>{login.passwd}</h3>
      </form>
    </div>
  );
}
