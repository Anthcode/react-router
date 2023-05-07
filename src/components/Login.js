import React, { useState } from 'react';
export default function Login() {
  const [login, setLogin] = useState({ email: '', passwd: '' });

  const signIn = (e) => {
    const { name, value } = e.target;
    setLogin({...login, [name]:value})
    console.log(login);
  };
  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="your@email.com"
          name="email"
          onChange={signIn}
         
        />
        
        <input
          type="password"
          placeholder="passwd"
          name="passwd"
          onChange={signIn}
         
        />
        <button className="btn-login">Log in</button>
      <h3> {login.email} </h3>
      <h3> {login.passwd} </h3>
      </form>
   
      
    </div>
  );
}
