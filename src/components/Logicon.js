import React from 'react';
import { useAuth } from "../auth/AuthContext";

export default function Logicon() {
  const {currentUser,userData} = useAuth();
  return (
    <>
    {currentUser ? (
        <div className="wrapp-icon">
        <div className="login-icon">
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128" id="avatar"><path d="M64,0a64,64,0,1,0,64,64A64.07239,64.07239,0,0,0,64,0Zm0,124a60,60,0,1,1,60-60A60.06812,60.06812,0,0,1,64,124Z"></path><path d="M77.78662,56.12677a22.05464,22.05464,0,0,1-4.08063,2.61A28.046,28.046,0,0,1,92,85v16a2.00229,2.00229,0,0,1-2,2H38a2.00229,2.00229,0,0,1-2-2V85A28.046,28.046,0,0,1,54.294,58.73676a22.05464,22.05464,0,0,1-4.08063-2.61A32.03946,32.03946,0,0,0,32,85v16a6.00656,6.00656,0,0,0,6,6H90a6.00656,6.00656,0,0,0,6-6V85A32.03946,32.03946,0,0,0,77.78662,56.12677Z"></path><path d="M64,57A18,18,0,1,0,46,39,18.02062,18.02062,0,0,0,64,57Zm0-32A14,14,0,1,1,50,39,14.01573,14.01573,0,0,1,64,25Z"></path></svg>
        {userData.name}
        </div>
        
        </div>
    ):null}
  </>
  )
}
