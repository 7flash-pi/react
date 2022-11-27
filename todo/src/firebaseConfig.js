// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUbKXW_npjzsSegQ_HzkeawwhTNJPDWsY",
  authDomain: "todo-self-f23fc.firebaseapp.com",
  projectId: "todo-self-f23fc",
  storageBucket: "todo-self-f23fc.appspot.com",
  messagingSenderId: "720739253642",
  appId: "1:720739253642:web:ee5d5bef9fcd1d625edc73",
  measurementId: "G-0CEMJV6KC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

export default db;
