import {Navigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";
import useUserLogged from "../hooks/use-user-logged";

const RequireAuth = props => {
    let location = useLocation();
    const userLogged = useUserLogged();

    if (!userLogged) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return props.children;
}


export default RequireAuth;
