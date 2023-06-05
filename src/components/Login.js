import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { IoLogIn } from  "react-icons/io5";
import { FcGoogle } from  "react-icons/fc"
import { motion } from "framer-motion";

export default function Login() {
  const { login, signup, signGoogle } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoging, setIsLoging] = useState(false);
  const [error, setError] = useState('');

  async function handleGoogle(e) {
    e.preventDefault();
    try {
      setError('');
      setIsLoging(true);
      await signGoogle();
      navigate('/user');
    } catch (error) {
      setError(error.code);
    }
    setIsLoging(false);
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      setError('');
      setIsLoging(true);
      await signup(email, password);
      navigate('/user');
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
 
  return (
    <div className="login">
        

        <motion.form
    className="form-login"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    >
        <div className="login-header">
          <h2>Login</h2>
          <IoLogIn size={25}/>
          </div>
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
          <button className="btn-google" onClick={handleGoogle}>
            <div className="login-header">
              <FcGoogle size={15} />&nbsp;Sign in with Google
            </div>
          </button>
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
        </motion.form>

    </div>
  );
}