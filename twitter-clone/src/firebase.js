// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCosBQSEzdCf2_5Ze5TcHdVn3APXUaSAKY",
  authDomain: "twitter-clone-356c4.firebaseapp.com",
  projectId: "twitter-clone-356c4",
  storageBucket: "twitter-clone-356c4.appspot.com",
  messagingSenderId: "816354448067",
  appId: "1:816354448067:web:9f612b63971a0269294876",
  measurementId: "G-C977KRYZDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    