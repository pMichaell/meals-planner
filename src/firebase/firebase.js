import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDnqNZgh-L1sroXegcx3f9F6Vd11Epj1tk",
    authDomain: "mealsplanner-726d3.firebaseapp.com",
    projectId: "mealsplanner-726d3",
    storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.PUBLIC_FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig);

export const database = getFirestore(firebaseApp);

export const auth = getAuth();