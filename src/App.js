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

  const [user , setUser] = useState(null)


  return (
    <div className="app">
       
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login user={user} setUser={setUser} />} />
        </Route>
      </Routes>

    </div>
  );
}
