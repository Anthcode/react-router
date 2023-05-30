import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Login() {
  const { login, currentUser, logout, signup, userData } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoging, setIsLoging] = useState(false);
  const [error, setError] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    try {
      setError('');
      setIsLoging(true);
      await signup(email, password);
    } catch (error) {
      setError(error.code);
    }
    setIsLoging(false);
    setEmail('');
    setPassword('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setIsLoging(true);
      await login(email, password);
      navigate('/user');
    } catch (error) {
      setError(error.code);
    }
    setIsLoging(false);
    setEmail('');
    setPassword('');
  }

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div className="login">
        <form>
          <h2>Login</h2>
          {error && <p>{error}</p>}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn-login"
            onClick={handleSubmit}
            disabled={!email}
          >
            {isLoging ? 'Logging...' : 'Login'}
          </button>
          <button className="btn-register" onClick={handleRegister}>
            Register
          </button>
        </form>
      
    </div>
  );
}
