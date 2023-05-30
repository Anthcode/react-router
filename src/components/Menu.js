import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Menu() {
  const activeStyles = {
    color: 'lightgreen',
  };
 
  const { currentUser, logout} = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch {
      console.log('Failed to log out');
    }}
  return (
    <div className="menu">
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact
        </NavLink>
        
        {!currentUser? (
        <NavLink
          to="login"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Login
        </NavLink>
        ):(
          <NavLink
          to="login"
          onClick={handleLogout}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Logout
        </NavLink>   
        )}
       
      </nav>
    </div>
  );
}
