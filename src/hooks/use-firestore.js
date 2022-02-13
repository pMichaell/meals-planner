import {useSelector} from "react-redux";
import {selectUserId, selectUserSigned} from "../store/userSlice";

const useFirestore = () => {
    const userID = useSelector(selectUserId);

    const saveMealPlan = () => {

    }
}

export default useFirestore;