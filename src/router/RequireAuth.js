import {Navigate, useLocation} from "react-router-dom";
import useUserSigned from "../hooks/use-user-signed";

const RequireAuth = props => {
    let location = useLocation();
    const userLogged = useUserSigned();

    if (!userLogged) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return props.children;
}


export default RequireAuth;
