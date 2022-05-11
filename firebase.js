// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy2tghevOHNjWLXTQzRUePoiRiq6IAXIc",
  authDomain: "fir-auth-707ba.firebaseapp.com",
  projectId: "fir-auth-707ba",
  storageBucket: "fir-auth-707ba.appspot.com",
  messagingSenderId: "773879990275",
  appId: "1:773879990275:web:92a8f9334c1ec05eaca636"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;