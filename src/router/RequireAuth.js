import {Navigate, useLocation} from "react-router-dom";
import {auth} from "../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const RequireAuth = props => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();


    if (!user && !loading) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return props.children;
}


export default RequireAuth;
