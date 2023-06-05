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
    console.log(provider)
    return signInWithPopup(auth, provider)
  }


  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      const userEmail = userCredential.user.email;
      createUserDataFolder(userId, userEmail); 
      getUserDataFolder(userId);// function create data from user in realtimedatabase
      return userId;
    })
    .catch((error) => {
      console.error('Error new user created: ', error);
    });
  }

  function createUserDataFolder(userId,userEmail) {
    const userFolderRef = ref(db, '/users/' + userId)
    // create user folder
    const userName = userEmail.split('@')[0];
   set(userFolderRef,{
      // starter default data new user
      id : userId,
      name: userName,
      age: 30,
      email: userEmail
    })
    .then(() => {
      console.log('Created folder for user: ', userId);
    })
    .catch((error) => {
      console.error('Error created user folder :', error);
    });
  }



  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      getUserDataFolder(userId); // get data from user folder
      return userId;
    })
    .catch((error) => {
      console.error('Error user login :', error);
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

      console.log(currentUser)
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    userData,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signGoogle,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}