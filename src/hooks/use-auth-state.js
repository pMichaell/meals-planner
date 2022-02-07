import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";
import {setActiveUser, setUserLoggedOut} from "../store/userSlice";
import {createUser} from "../firebase/firestore-functions";

const useAuthState = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(setActiveUser(
                    {userEmail: user.email, userUid: user.uid}));
                createUser(user);
            } else {
                dispatch(setUserLoggedOut());
            }
        })


    }, [dispatch])
}

export default useAuthState;