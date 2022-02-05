import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";

const useUserLogged = () => {
    const [userLogged, setUserLogged] = useState(true);

    useEffect(() => {
        const getData = async () => {
            await onAuthStateChanged(auth, user => {
                if (user) {
                    setUserLogged(true);
                } else {
                    setUserLogged(false);
                }
            })
        }

        getData();

        return () => {
            setUserLogged(false);
        }
    }, [userLogged])

    return userLogged;
}

export default useUserLogged;