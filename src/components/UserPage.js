import React from 'react';
import { useAuth } from '../auth/AuthContext';
import Logicon from './Logicon'

export default function UserPage() {
  const { currentUser, userData } = useAuth();
  return (
    <div className="userPage">
      <Logicon />
      <h1>UserPAGE</h1>

      <div className="logout">
        <p>
          Użytkownik jest zalogowany jako <b>{currentUser.email}</b>
        </p>
       <div className="userinfo">
         <ul  style={{fontFamily: 'Droid Sans'}}>
           <li>
          <b>id:</b> {userData.id}
          </li>
          <li>
          <b>email:</b> {userData.email}
          </li>
          <li>
          <b>name:</b> {userData.name}
          </li>
          <li>
          <b>age:</b> {userData.age}
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}