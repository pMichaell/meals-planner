import classes from "./Header.module.css"
import logo from "../../assets/apple_logo.png"
import {Fragment, useEffect} from "react";
import SideMenuButton from "./SideMenuButton";
import SideMenu from "../SideMenu/SideMenu";
import {changeSideMenuState, selectSideMenu} from "../../store/uiSlice";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../firebase/firebase";
import {signOut} from "firebase/auth"
import useUserLogged from "../../hooks/use-user-logged";
import useDelay from "../../hooks/use-delay";

const Header = () => {
    const sideMenuVisible = useSelector(selectSideMenu);
    const userLogged = useUserLogged();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sideMenuHandler = () => {
        dispatch(changeSideMenuState())
        console.log(sideMenuVisible)
    }

    const signOutHandler = async () => {
        await signOut(auth);
        navigate("/", {replace: true});
    }

    const logoClickHandler = () => {
        navigate("/", {replace: false});
    }

    const navigationList = userLogged ?
        <ul className={classes.navigationList}>
            <li className={classes.navigationListItem}><Link to="/account">My Account</Link></li>
            <li className={classes.navigationListItem}><button onClick={signOutHandler}>Sign Out</button></li>
        </ul> :
        <ul className={classes.navigationList}>
            <li className={classes.navigationListItem}><NavLink
                style={({ isActive }) => {
                    return {
                        color: isActive ? `#d3d3d3` : ""
                    };
                }}
                to="/planner">Get Started</NavLink></li>
            <li className={classes.navigationListItem}><NavLink  style={({ isActive }) => {
                return {
                    color: isActive ? `#d3d3d3` : ""
                };
            }} to="/login">Sign in</NavLink></li>
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