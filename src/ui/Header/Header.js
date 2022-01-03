import classes from "./Header.module.css"
import logo from "../../assets/apple_logo.png"
import {Fragment, useState} from "react";
import SideMenuButton from "./SideMenuButton";
import SideMenu from "../SideMenu/SideMenu";
import {Link} from "react-router-dom";

const Header = () => {
    const [sideMenuVisible, setSideMenuVisible] = useState(false);

    const sideMenuHandler = () => {
        setSideMenuVisible(!sideMenuVisible)
        console.log(sideMenuVisible)
    }

    return (
        <Fragment>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <SideMenuButton onClick={sideMenuHandler}/>
                    <div className={classes.title}>
                        <p className={classes.mealsParagraph}>Meals</p>
                        <img className={classes.logo} src={logo} alt="logo"/>
                        <p className={classes.plannerParagraph}>Planner</p>
                    </div>
                    <div className={classes.listContainer}>
                    <ul className={classes.navigationList}>
                        <li className={classes.navigationListItem}><Link to="/pricing">Pricing</Link></li>
                        <li className={classes.navigationListItem}><Link to="/login">Login</Link></li>
                        <li className={classes.navigationListItem}><Link to="/planner">Get Started</Link></li>
                    </ul>
                    </div>
                </nav>
            <SideMenu sideMenuVisible={sideMenuVisible}/>
            </header>
        </Fragment>
    )
}

export default Header;