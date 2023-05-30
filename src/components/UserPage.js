import React from 'react';
import { useAuth } from '../auth/AuthContext';

export default function UserPage() {
  const { currentUser, userData } = useAuth();
  return (
    <div className="about">
      <h1>UserPAGE</h1>

      <div className="logout">
        <p>
          Użytkownik jest zalogowany jako <b>{currentUser.email}</b>
        </p>
       <div className="userinfo">
         <ul  style={{fontFamily: 'Droid Sans'}}>
           <li>
          <p><b>id:</b> {userData.id}</p>
          </li>
          <li>
          <p><b>email:</b> {userData.email}</p>
          </li>
          <li>
          <p><b>name:</b> {userData.name}</p>
          </li>
          <li>
          <p><b>age:</b> {userData.age}</p>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}