import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyG8frMTHcYJtnvu0-elBM2DZJYKkYfvE",
    authDomain: "laser-world-aesthetic.firebaseapp.com",
    projectId: "laser-world-aesthetic",
    storageBucket: "laser-world-aesthetic.appspot.com",
    messagingSenderId: "574696224323",
    appId: "1:574696224323:web:52e20832d74e7b009986f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getDatabase(app);