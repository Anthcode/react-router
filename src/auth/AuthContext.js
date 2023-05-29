import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth } from '../firebase/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { db } from "../firebase/firebase"
import { ref, set, onValue, remove } from "firebase/database";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      const userEmail = userCredential.user.email;
      console.log(userId, userEmail)
      createUserDataFolder(userId, userEmail); // Tworzenie folderu dla użytkownika w bazie danych
      return userId;
    })
    .catch((error) => {
      console.error('Błąd podczas tworzenia nowego użytkownika:', error);
    });
  }

  function createUserDataFolder(userId,userEmail) {
   
    const userFolderRef = ref(db, '/users/' + userId)
   
    
    // Tworzenie folderu dla użytkownika
   set(userFolderRef,{
      // Dodaj dowolne początkowe dane dla folderu użytkownika
      // Na przykład:
      name: 'John Doe',
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
    return signInWithEmailAndPassword(auth, email, password);
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
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
