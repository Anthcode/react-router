import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="menu">
      <nav>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="about">
            <li>About</li>
          </NavLink>
          <NavLink to="contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
