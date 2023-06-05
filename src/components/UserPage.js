import React from 'react';
import { useAuth } from '../auth/AuthContext';

export default function UserPage() {
  const { currentUser, userData } = useAuth();
  return (
    <div className="userPage">
      <div className="userAvatar">
      {currentUser.photoURL?
        <img src={currentUser.photoURL} alt="useravatar" className="imgAvatar"/>
        : <div className="noneAvatar"></div>}
      </div>
      <h1>UserPAGE</h1> 
      <div className="logout">
        <p>
          Użytkownik jest zalogowany jako <b>{userData.name?userData.name:currentUser.displayName}</b>
        </p>
       <div className="userinfo">
         <ul  style={{fontFamily: 'Droid Sans'}}>
           <li>
          <b>id:</b> {currentUser.uid?currentUser.uid:userData.id}
          </li>
          <li>
          <b>email:</b> {currentUser.email?currentUser.email:userData.email?userData.email:'none'}
          </li>
          <li>
          <b>name:</b> {userData.name?userData.name:currentUser.displayName}
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