import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './style.css';
import Layout from './components/Layout';
import Home from './components/Home';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

        </Route>
      </Routes>
    </div>
  );
}
