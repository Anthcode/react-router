import React, { useState } from 'react';
export default function Login() {
  const [login, setLogin] = useState({});

  const signIn = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    setLogin(formObject);
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
        {process.env.REACT_APP_NAME}
      </form>
    </div>
  );
}
