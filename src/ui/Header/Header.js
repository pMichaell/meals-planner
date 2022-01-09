import classes from "./Header.module.css"
import logo from "../../assets/apple_logo.png"
import {Fragment} from "react";
import SideMenuButton from "./SideMenuButton";
import SideMenu from "../SideMenu/SideMenu";
import {changeSideMenuState, selectSideMenu} from "../../store/uiSlice";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserLoggedIn} from "../../store/userSlice";
import {auth} from "../../firebase/firebase";
import {signOut} from "firebase/auth"

const Header = () => {
    const sideMenuVisible = useSelector(selectSideMenu);
    const userIsLoggedIn = useSelector(selectUserLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sideMenuHandler = () => {
        dispatch(changeSideMenuState())
        console.log(sideMenuVisible)
    }

    const signOutHandler = () => {
        signOut(auth);
        navigate("/", {replace: true});
    }

    const logoClickHandler = () => {
        navigate("/", {replace: false});
    }

    const navigationList = userIsLoggedIn ?
        <ul className={classes.navigationList}>
            <li className={classes.navigationListItem}><Link to="/account">My Account</Link></li>
            <li className={classes.navigationListItem}><button onClick={signOutHandler}>Log Out</button></li>
        </ul>
        :
        <ul className={classes.navigationList}>
            <li className={classes.navigationListItem}><Link to="/planner">Get Started</Link></li>
            <li className={classes.navigationListItem}><Link to="/login">Login</Link></li>
        </ul>

    return (
        <Fragment>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <SideMenuButton onClick={sideMenuHandler}/>
                    <div className={classes.title} onClick={logoClickHandler}>
                        <p className={classes.mealsParagraph}>Meals</p>
                        <img className={classes.logo} src={logo} alt="logo"/>
                        <p className={classes.plannerParagraph}>Planner</p>
                    </div>
                    <div className={classes.listContainer}>
                        {navigationList}
                    </div>
                </nav>
            <SideMenu sideMenuVisible={sideMenuVisible}/>
            </header>

        </Fragment>
    )
}

export default Header;