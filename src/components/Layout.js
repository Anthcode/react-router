import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
