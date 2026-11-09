// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "agent-ai-1fa29.firebaseapp.com",
  projectId: "agent-ai-1fa29",
  storageBucket: "agent-ai-1fa29.firebasestorage.app",
  messagingSenderId: "403841904465",
  appId: "1:403841904465:web:14ec6ea493435b39e6ed70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()