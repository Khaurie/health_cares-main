import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA_-2QtjQ5marHMUm9NS5fBpfjswFsqtbk",
    authDomain: "healthcare-monitor-f1b60.firebaseapp.com",
    projectId: "healthcare-monitor-f1b60",
    storageBucket: "healthcare-monitor-f1b60.appspot.com",
    messagingSenderId: "618838506938",
    appId: "1:618838506938:web:903e13f7479254fac83183",
    measurementId: "G-64E1LMX5RH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const imageDb = getStorage(app)
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export { app, auth, imgDB, txtDB }; // Export app, auth, db, and storage for use in your application