import {useSelector} from "react-redux";
import {selectUserLoggedIn} from "../store/userSlice";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = props => {
    const userLoggedIn = useSelector(selectUserLoggedIn);
    let location = useLocation();



    return props.children;
}

export default RequireAuth;
