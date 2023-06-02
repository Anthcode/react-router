import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { FaUserCircle} from  "react-icons/fa";

export default function UserPage() {
  const { currentUser, userData } = useAuth();
  return (
    <div className="userPage">
      <div className="userAvatar">
      <FaUserCircle size={30}/>
      </div>
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