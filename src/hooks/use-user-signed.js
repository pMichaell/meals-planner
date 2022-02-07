import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";
import {useDispatch} from "react-redux";

const useUserSigned = () => {
    const [userSigned, setUserSigned] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            await onAuthStateChanged(auth, user => {
                if (user) {
                    setUserSigned(true);
                } else {
                    setUserSigned(false);
                }
            })
        }

        getData();

        return () => {
            setUserSigned(false);
        }
    }, [dispatch])

    return userSigned;
}

export default useUserSigned;