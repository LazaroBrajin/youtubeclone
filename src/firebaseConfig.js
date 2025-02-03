import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB-hjTQfrpqQ-yoTN_-PDWElKSC3kAU1m4",
    authDomain: "clonefirebase-f55d5.firebaseapp.com",
    databaseURL: "https://clonefirebase-f55d5-default-rtdb.firebaseio.com",
    projectId: "clonefirebase-f55d5",
    storageBucket: "clonefirebase-f55d5.firebasestorage.app",
    messagingSenderId: "208932543573",
    appId: "1:208932543573:web:95c4c50729ae7b959e48dc"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue };