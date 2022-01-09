import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDnqNZgh-L1sroXegcx3f9F6Vd11Epj1tk",
    authDomain: "mealsplanner-726d3.firebaseapp.com",
    projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.PUBLIC_FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();