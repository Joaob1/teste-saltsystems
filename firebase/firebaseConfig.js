import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDT8f2FkK62Qb7Xp9mCOTocp0CG3tYHokE",
    authDomain: "teste-salt-systems.firebaseapp.com",
    projectId: "teste-salt-systems",
    storageBucket: "teste-salt-systems.appspot.com",
    messagingSenderId: "743548410992",
    appId: "1:743548410992:web:72713c7d99d27f7b0a28b5",
    measurementId: "G-ECT0BHL35F",
};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);
