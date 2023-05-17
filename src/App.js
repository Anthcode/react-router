import React, {useContext, useState, useEffect} from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './style.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import AuthContext from './auth/AuthContext'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase';

export default function App() {

/*   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []); */

  return (
    <div className="app">
       
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

    </div>
  );
}
