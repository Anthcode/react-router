import React, { useContext } from 'react';
import AuthContext from "../auth/AuthContext";

export default function Logicon() {

const user = useContext(AuthContext)

  return (
        <div>
          {user ?(
          <>
            <p>Użytkownik jest zalogowany jako {user.email}</p>
            <button onClick={logOut}> Logout </button>
          </>
          ) : (
            <p>Użytkownik nie jest zalogowany</p>
          )}
        </div>
  );
}
