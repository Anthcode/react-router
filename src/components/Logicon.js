import React, { useContext } from 'react';
import AuthContext from "../auth/AuthContext";

export default function Logicon({user}) {



  return (
        <div>
          {user ?(
          <>
            <p>Użytkownik jest zalogowany jako {user.email}</p>
            
          </>
          ) : (
            <p>Użytkownik nie jest zalogowany</p>
          )}
        </div>
  );
}
