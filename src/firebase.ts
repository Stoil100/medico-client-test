// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCShbfFKa5-ZYhjAEDQLuc8TYIVN_ig0",
  authDomain: "medico-9b20e.firebaseapp.com",
  projectId: "medico-9b20e",
  storageBucket: "medico-9b20e.firebasestorage.app",
  messagingSenderId: "419817582387",
  appId: "1:419817582387:web:b64f941c5c5893191bd846",
  measurementId: "G-KFWZS6FSF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);