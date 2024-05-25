// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqajcXlb1C23uqYCzjopVpPGuXWTYBKbk",
  authDomain: "healthcare01-fe3e0.firebaseapp.com",
  projectId: "healthcare01-fe3e0",
  storageBucket: "healthcare01-fe3e0.appspot.com",
  messagingSenderId: "1032225936656",
  appId: "1:1032225936656:web:3aad2c2b5a33880fce4195",
  measurementId: "G-J2H39H3M9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app);

export { db };

export { app, auth };
export default firebaseConfig;