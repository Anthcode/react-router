import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Menu() {
  const activeStyles = {
    color: 'lightgreen',
  };
  const { currentUser } = useAuth();
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
        
        <NavLink
          to="login"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
         {!currentUser?  "Login" : "Logout"}
        </NavLink>
       
      </nav>
    </div>
  );
}
