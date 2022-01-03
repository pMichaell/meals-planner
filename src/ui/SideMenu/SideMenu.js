import classes from "./SideMenu.module.css"
import {Fragment} from "react";
import ReactDom from "react-dom";
import {Link} from "react-router-dom";

const SideMenu = props => {
    const portalElement = document.getElementById("overlays");

    let styles = props.sideMenuVisible ? `${classes.sideMenu} ${classes.open}` : classes.sideMenu;

    return <Fragment>
        <div className={styles}>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuItem}><Link to="/planner">Get Started</Link></li>
                <li className={classes.sideMenuItem}><Link to="/login">Login</Link></li>
                <li className={classes.sideMenuItem}><Link to="/pricing">Pricing</Link></li>
            </ul>
        </div>
    </Fragment>
}

export default SideMenu;