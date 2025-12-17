import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyA6HhvCC-ZS2xAjD4OsDgl7sBHvYNeRy3U",
  authDomain: "bolshop-51f74.firebaseapp.com",
  projectId: "bolshop-51f74",
  storageBucket: "bolshop-51f74.firebasestorage.app",
  messagingSenderId: "117602179556",
  appId: "1:117602179556:web:1f7fdd77b4008819640ff1",
  measurementId: "G-JGZVFWBJ51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();