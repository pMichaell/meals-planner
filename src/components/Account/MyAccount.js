import classes from "./MyAccount.module.css"
import UserCard from "./UserCard/UserCard";
import {Fragment, useEffect, useState} from "react";
import {fetchUserData, fetchUserPlans} from "../../firebase/firestore-functions";
import {useSelector} from "react-redux";
import {selectUserId} from "../../store/userSlice";
import PlanPreview from "./PlanPreview/PlanPreview";
import Spinner from "../../ui/Spinner/Spinner";

const MyAccount = () => {
    const [userData, setUserData] = useState();
    const [userMeals, setUserMeals] = useState([]);
    const [loading, setLoading] = useState();
    const [navbarIndex, setNavbarIndex] = useState(null);
    const userID = useSelector(selectUserId);
    //TODO implement listening for swipes in navbar

    useEffect(() => {
        const getUserData = async () => {
            setLoading(true);
            const data = await fetchUserData(userID);
            setUserData(data);
            setLoading(false);
        }

        const getUserMeals = async () => {
            setLoading(true);
            const data = await fetchUserPlans(userID);
            if(!!data) setNavbarIndex(0);
            setUserMeals(data);
            setLoading(false);
        }

        const getData = async () => {
            await getUserData();
            await getUserMeals();
        }

        getData();
    }, [userID])

    const plansContainerContents = loading ?
        <Spinner/>
        :
        <Fragment>
            <div className={classes.navigationBar}></div>
            <div className={classes.previewContainer}>{userMeals.map(meal => {
                return <PlanPreview {...meal}/>
            })}
            </div>
        </Fragment>

    const plansContainerStyle = loading ? `${classes.loading} ${classes.plansContainer}` : classes.plansContainer

    return (<div className={classes.container}>
        <UserCard {...userData} loading={loading}/>
        <div className={classes.headerDiv}><h3>Your plans</h3></div>
        <div className={plansContainerStyle}>
            {plansContainerContents}
        </div>
    </div>)
}

export default MyAccount;