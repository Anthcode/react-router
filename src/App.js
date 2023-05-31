import React from 'react';
import { useAuth } from './auth/AuthContext';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './style.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Protected from './components/Protected';
import UserPage from './components/UserPage';

export default function App() {
  const { currentUser } = useAuth();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
            <Route path="user" 
            element={
              <Protected currentUser={currentUser}><UserPage /></Protected>
            } />
        </Route>
      </Routes>
    </div>
  );
}
