import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVb76Ug6GNyQbAvXTDmPT_-scBqWPl49E",
    authDomain: "prueba-b6cde.firebaseapp.com",
    projectId: "prueba-b6cde",
    storageBucket: "prueba-b6cde.appspot.com",
    messagingSenderId: "960958757062",
    appId: "1:960958757062:web:7df98a1c8e874eddecbfc7",
    measurementId: "G-JNVQVS0S9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
auth.useDeviceLanguage();

export default auth;
