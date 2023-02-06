// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUc8Md7T60_M23hdGQdC-HTAMAUuchFNk",
  authDomain: "movierecco-40212.firebaseapp.com",
  projectId: "movierecco-40212",
  storageBucket: "movierecco-40212.appspot.com",
  messagingSenderId: "369248551134",
  appId: "1:369248551134:web:b227fbc93db73725cf824f",
  measurementId: "G-PL8EFMJBE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app); 
const analytics = getAnalytics(app);