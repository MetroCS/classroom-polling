import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiZSV4Z_3-L0z8RP5yY_2xXlw5fKOy2jc",
  authDomain: "classroom-polling-dd344.firebaseapp.com",
  databaseURL: "https://classroom-polling-dd344-default-rtdb.firebaseio.com",
  projectId: "classroom-polling-dd344",
  storageBucket: "classroom-polling-dd344.firebasestorage.app",
  messagingSenderId: "528103899828",
  appId: "1:528103899828:web:f74274640de611a61d0de1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

signInAnonymously(auth).catch(console.error);
