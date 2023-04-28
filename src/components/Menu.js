import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  
  const activeStyles = {

    color: "lightgreen"
}
  return (
    <div className="menu">
      <nav>
          <NavLink to="/" style={({isActive}) => isActive ? activeStyles : null}>
            Home
          </NavLink>
          <NavLink to="about" style={({isActive}) => isActive ? activeStyles : null}>
            About
          </NavLink>
          <NavLink to="contact" style={({isActive}) => isActive ? activeStyles : null}>
            Contact
          </NavLink>
      </nav>
    </div>
  );
}
