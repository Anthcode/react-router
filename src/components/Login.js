import React from 'react';
export default function Login() {
  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="passwd" />
        <button className="btn-login">Log in</button>
      </form>
    </div>
  );
}
