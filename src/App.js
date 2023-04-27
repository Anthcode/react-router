import React from 'react';
import './style.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
