// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMlI0zD9mC3Pn9er0yQsOle-8r7tCH0F0",
  authDomain: "metalskull-9ede9.firebaseapp.com",
  projectId: "metalskull-9ede9",
  storageBucket: "metalskull-9ede9.appspot.com",
  messagingSenderId: "83528088940",
  appId: "1:83528088940:web:7124f9e663aa4deda50749",
  measurementId: "G-MJ8E194RLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);