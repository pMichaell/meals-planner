import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDnqNZgh-L1sroXegcx3f9F6Vd11Epj1tk",
    authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.PUBLIC_FIREBASE_APP_ID
}

initializeApp(firebaseConfig);

export const auth = getAuth();