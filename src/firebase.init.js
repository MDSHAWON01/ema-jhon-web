// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFrukSbg5CWSybHzrCE4ozzwnVN-oG6SE",
    authDomain: "ema-jhon-simple-web-b0c9c.firebaseapp.com",
    projectId: "ema-jhon-simple-web-b0c9c",
    storageBucket: "ema-jhon-simple-web-b0c9c.appspot.com",
    messagingSenderId: "1089188930838",
    appId: "1:1089188930838:web:3f06703a4143b830a89c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;