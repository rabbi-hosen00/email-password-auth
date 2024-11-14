// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0LSekUFQyMWpuMKh9PDQeH3axgXDxCH0",
  authDomain: "email-password-auth-d83c3.firebaseapp.com",
  projectId: "email-password-auth-d83c3",
  storageBucket: "email-password-auth-d83c3.firebasestorage.app",
  messagingSenderId: "577146371439",
  appId: "1:577146371439:web:92a57ac3f07d243decbc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

