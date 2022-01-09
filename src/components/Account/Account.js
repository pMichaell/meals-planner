import classes from "./Account.module.css"
import {useSelector} from "react-redux";
import {selectUserEmail} from "../../store/userSlice";

const Account = () => {
    const userEmail = useSelector(selectUserEmail);

    return (<div className={classes.container}>
        <h1 className={classes.email}>{userEmail}</h1>
    </div>)
}

export default Account;