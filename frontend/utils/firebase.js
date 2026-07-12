// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "multi-agent-ai-2ac13.firebaseapp.com",
  projectId: "multi-agent-ai-2ac13",
  storageBucket: "multi-agent-ai-2ac13.firebasestorage.app",
  messagingSenderId: "315335229189",
  appId: "1:315335229189:web:70320de6e1859fa50ac16c",
  measurementId: "G-WK58LD04X2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
