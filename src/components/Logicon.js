import React from 'react';
import { useAuth } from "../auth/AuthContext";

export default function Logicon() {
  const {currentUser} = useAuth();
  return (
    <>
    {currentUser ? (
        <div className="login-icon">{currentUser.email}</div>
    ):null}
  </>
  )
}
