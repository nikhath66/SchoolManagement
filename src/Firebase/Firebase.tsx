// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4prROeD0tUeX0mA7hynRRq0GfsfcSUo",
  authDomain: "dev-zohra.firebaseapp.com",
  projectId: "dev-zohra",
  storageBucket: "dev-zohra.appspot.com",
  messagingSenderId: "1072408715980",
  appId: "1:1072408715980:web:048ab03e1a143a577ed869",
  measurementId: "G-YHP7YSRDXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebaseAuth.initializeAuth(app);

export { auth, firebaseAuth };
