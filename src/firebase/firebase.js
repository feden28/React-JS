// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwVYnDjrvJkn0sW1edPTdvJO0a-wJInK0",
  authDomain: "reactcomision37830.firebaseapp.com",
  projectId: "reactcomision37830",
  storageBucket: "reactcomision37830.appspot.com",
  messagingSenderId: "610595319841",
  appId: "1:610595319841:web:a7a84c623200b04774f360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);