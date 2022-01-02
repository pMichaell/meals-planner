import classes from "./SideMenu.module.css"
import {Fragment} from "react";
import ReactDom from "react-dom";

const SideMenu = props => {
    const portalElement = document.getElementById("overlays");

    let styles = props.sideMenuVisible ? `${classes.sideMenu} ${classes.open}` : classes.sideMenu;

    return <Fragment>
        <div className={styles}>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuItem}>Get Started</li>
                <li className={classes.sideMenuItem}>Login</li>
                <li className={classes.sideMenuItem}>About Us</li>
            </ul>
        </div>
    </Fragment>
}

export default SideMenu;