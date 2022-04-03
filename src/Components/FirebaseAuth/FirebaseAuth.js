// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmMZyTCdut3-t-gOxa4WUg0nqv2yRR8_s",
  authDomain: "queenz-zone.firebaseapp.com",
  projectId: "queenz-zone",
  storageBucket: "queenz-zone.appspot.com",
  messagingSenderId: "139644939040",
  appId: "1:139644939040:web:e2f90ea7de366c7aeb4545",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
};
