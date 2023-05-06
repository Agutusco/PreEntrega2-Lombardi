// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXEsek-xBncTPVDMSL1eRGlyImsChHK-A",
    authDomain: "just-kids-31048.firebaseapp.com",
    projectId: "just-kids-31048",
    storageBucket: "just-kids-31048.appspot.com",
    messagingSenderId: "512316310316",
    appId: "1:512316310316:web:4a797ab33ded0690ace289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)