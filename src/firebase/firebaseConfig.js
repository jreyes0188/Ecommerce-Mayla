import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCQvI7mywx-sMCTq1Tc-cjP66l4KeDgkbI",
    authDomain: "mayla-e-commerce.firebaseapp.com",
    projectId: "mayla-e-commerce",
    storageBucket: "mayla-e-commerce.appspot.com",
    messagingSenderId: "29698537148",
    appId: "1:29698537148:web:79bd8aec56aa8dea0442b9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)