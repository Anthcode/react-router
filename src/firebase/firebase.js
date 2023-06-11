import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBHOdn1gsYUBwxZGb-mcq-T4OSHmhaTkBU',

  authDomain: 'auth-644f4.firebaseapp.com',

  databaseURL: 'https://auth-644f4-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'auth-644f4',

  storageBucket: 'auth-644f4.appspot.com',

  messagingSenderId: '335012110278',

  appId: '1:335012110278:web:05ef16ae90d6c35705dcc7',
};

// Initialize Firebase
const app = getApps.Length > 0 ? getApps() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export { app, auth, db };
