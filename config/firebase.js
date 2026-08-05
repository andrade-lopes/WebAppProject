import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbkkhwoJGBfcxNQPZQPDTVMOWQyxdnCl4",
    authDomain: "volunteerprojectcloud.firebaseapp.com",
    projectId: "volunteerprojectcloud",
    storageBucket: "volunteerprojectcloud.firebasestorage.app",
    messagingSenderId: "1048825279352",
    appId: "1:1048825279352:web:8984acf831c162d5828e8d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };