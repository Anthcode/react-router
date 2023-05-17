import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({user}) {
  return (
    <div className="app">
      <Header user={user} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
