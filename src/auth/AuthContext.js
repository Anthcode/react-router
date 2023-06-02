import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth } from '../firebase/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { db } from "../firebase/firebase"
import { ref, set, get, child } from "firebase/database";



const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setuserData] = useState({});


  function signGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  /* */
  }


  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      const userEmail = userCredential.user.email;
      createUserDataFolder(userId, userEmail); 
      getUserDataFolder(userId);// Tworzenie folderu dla użytkownika w bazie danych
      return userId;
    })
    .catch((error) => {
      console.error('Błąd podczas tworzenia nowego użytkownika:', error);
    });
  }

  function createUserDataFolder(userId,userEmail) {
    const userFolderRef = ref(db, '/users/' + userId)
    // Tworzenie folderu dla użytkownika
    const userName = userEmail.split('@')[0];
   set(userFolderRef,{
      // Dodaj dowolne początkowe dane dla folderu użytkownika
      // Na przykład:
      id : userId,
      name: userName,
      age: 30,
      email: userEmail
    })
    .then(() => {
      console.log('Utworzono folder dla użytkownika:', userId);
    })
    .catch((error) => {
      console.error('Błąd podczas tworzenia folderu użytkownika:', error);
    });
  }



  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      getUserDataFolder(userId); // Pobranie danych z folderu użytkownika
      return userId;
    })
    .catch((error) => {
      console.error('Błąd podczas tworzenia nowego użytkownika:', error);
    });
  }

  function getUserDataFolder(userId) {
    const dbRef = ref(db);
    get(child(dbRef, '/users/' + userId)).then((snapshot) => {
      if (snapshot.exists()) {
        setuserData(snapshot.val());
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signGoogle
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
