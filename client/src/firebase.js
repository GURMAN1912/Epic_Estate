// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-42e9a.firebaseapp.com",
  projectId: "estate-42e9a",
  storageBucket: "estate-42e9a.appspot.com",
  messagingSenderId: "946108612270",
  appId: "1:946108612270:web:9bdafbf353a936cb2ff73f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);