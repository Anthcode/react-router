import React from 'react';
import { AuthProvider } from './auth/AuthContext'
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './style.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';


export default function App() {
  return (
    <div className="app">
        <AuthProvider>
      <Routes>
   
        <Route path="/" element={<Layout  />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      
      </Routes>
      </AuthProvider>
    </div>
  );
}
