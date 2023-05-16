import React from 'react';
const logo = 'https://cdn.worldvectorlogo.com/logos/react-2.svg';

export default function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}
