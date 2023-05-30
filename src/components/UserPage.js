import React from 'react';
import { useAuth } from '../auth/AuthContext';

export default function UserPage() {
  const { currentUser, userData, logout} = useAuth();

  async function handleLogout() {
   
    try {
      await logout();
      navigate('/login');
    } catch {
      console.log('Failed to log out');
    }
  }
  return (
    <div className="about">
      <h1>UserPAGE</h1>

      <div className="logout">
          <p>
            Użytkownik jest zalogowany jako <b>{currentUser.email}</b>
          </p>
          <button onClick={handleLogout}>Logout</button>
          <p> {userData.id}</p>
          <p> {userData.email}</p>
          <p> {userData.name}</p>
          <p> {userData.age}</p>
        </div>
    </div>
  );
}