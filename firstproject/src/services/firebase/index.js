// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj6QeZSvUMjH34kgUCD_thNrZEvsrwH1k",
    authDomain: "react-coderhouse-d5a39.firebaseapp.com",
    projectId: "react-coderhouse-d5a39",
    storageBucket: "react-coderhouse-d5a39.firebasestorage.app",
    messagingSenderId: "519306594210",
    appId: "1:519306594210:web:78e20723cebec02e6214fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)