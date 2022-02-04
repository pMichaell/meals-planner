import {useSelector} from "react-redux";
import {selectUserLoggedIn, setActiveUser, setUserLoggedOut} from "../store/userSlice";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";
import {createUser} from "../firebase/firestore-functions";

const RequireAuth = props => {
    const userLoggedIn = useSelector(selectUserLoggedIn);
    let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            let userLogged;
            onAuthStateChanged(auth, user => {
                userLogged = !!user;
            }, () => {},
                () => {
                if(!userLogged) {
                    navigate("/login", {replace: true})
                }
            })


        }
        getUser();
    })

    return props.children;
}


export default RequireAuth;
