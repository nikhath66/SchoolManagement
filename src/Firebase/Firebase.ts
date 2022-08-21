import firebase from "firebase/compat/app";
import * as firebaseAuth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ7-IRbb1H-9IRhnw5UONNxDnbbK53fsg",
  authDomain: "school-70f28.firebaseapp.com",
  projectId: "school-70f28",
  storageBucket: "school-70f28.appspot.com",
  messagingSenderId: "517538278212",
  appId: "1:517538278212:web:01d680d229422b5f0d0511",
  measurementId: "G-1MWJ8WM1TM",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app, {
  persistence: firebaseAuth.browserSessionPersistence,
  popupRedirectResolver: firebaseAuth.browserPopupRedirectResolver,
});

export { app, auth, firebaseAuth };
