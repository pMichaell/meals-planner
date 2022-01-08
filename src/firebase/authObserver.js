import { onAuthStateChanged, getAuth } from "firebase/auth"
import {store} from "../store/store";
import { setActiveUser, setUserLoggedOut } from "../store/userSlice";

const auth = getAuth();

onAuthStateChanged(auth, user => {
        alert("onAuthStateChanged")
    if (user) {
        const userEmail = user.email;
        store.dispatch(setActiveUser(null, {userEmail}))
    }
    else {
        store.dispatch(setUserLoggedOut())
        alert("onAuthStateChanged")
    }
})