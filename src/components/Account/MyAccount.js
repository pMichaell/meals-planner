import classes from "./MyAccount.module.css"
import UserCard from "./UserCard/UserCard";
import {useEffect, useState} from "react";
import {fetchUserData} from "../../firebase/firestore-functions";
import {useSelector} from "react-redux";
import {selectUserId} from "../../store/userSlice";

const MyAccount = () => {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState();
    const userID = useSelector(selectUserId);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await fetchUserData(userID);
            setUserData(data);
            setLoading(false);
        }

        getData();
    }, [userID])

    return (<div className={classes.container}>
        <h1 className={classes.email}>Welcome back!</h1>
        <UserCard {...userData} loading={loading}/>
    </div>)
}

export default MyAccount;