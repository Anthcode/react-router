import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';
import AuthContext from "../auth/AuthContext";

export default function Logicon() {
//const [isLogged, setIsLogged] = useState(true)
const user = useContext(AuthContext)

  return (
    <>

        <div>
          {user ? (<>
            <p>Użytkownik jest zalogowany jako {user.email}</p>
            <button onClick={logOut}> Logout </button>
            </>
          ) : (
            <p>Użytkownik nie jest zalogowany</p>
          )}
        </div>

   </>
    
  );
}
