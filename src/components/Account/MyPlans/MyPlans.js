import classes from "./MyPlans.module.css"
import {useSelector} from "react-redux";
import {selectUserId} from "../../../store/userSlice";

const MyPlans = () => {
    const userID = useSelector(selectUserId);


}

export default MyPlans;