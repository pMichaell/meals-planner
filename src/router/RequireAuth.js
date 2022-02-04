import {useSelector} from "react-redux";
import {selectUserLoggedIn} from "../store/userSlice";
import {Navigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const RequireAuth = props => {
    const [delayed, setDelayed] = useState(false);
    const userLoggedIn = useSelector(selectUserLoggedIn);
    let location = useLocation();

    useEffect(() => {
        setTimeout(() => {setDelayed(true)}, 600)
    })

    if (delayed && !userLoggedIn) {
            return <Navigate to="/login" state={{from: location}} replace/>
        }


    return props.children;
}


export default RequireAuth;
