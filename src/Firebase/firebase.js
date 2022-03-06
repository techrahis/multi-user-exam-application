// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSWaFz1H856x0KKG6M5yJ-_LJ3cRRhdG4",
  authDomain: "todo-b5a3c.firebaseapp.com",
  databaseURL: "https://todo-b5a3c-default-rtdb.firebaseio.com",
  projectId: "todo-b5a3c",
  storageBucket: "todo-b5a3c.appspot.com",
  messagingSenderId: "729385098081",
  appId: "1:729385098081:web:32440f3b7dd24ba3944320",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, db, auth };
