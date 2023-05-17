import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { AuthProvider } from '../auth/AuthContext'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app">

      <Header  />
      
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>
  );
}
