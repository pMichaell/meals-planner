import {useSelector} from "react-redux";
import {selectUserLoggedIn} from "../store/userSlice";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = props => {
    const userLoggedIn = useSelector(selectUserLoggedIn);
    let location = useLocation();

    if (!userLoggedIn) {
        return <Navigate to="/login" state={{from: location}} replace/>
    }

    return props.children;
}


export default RequireAuth;
