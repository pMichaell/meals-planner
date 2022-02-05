import classes from "./SideMenu.module.css"
import {Fragment} from "react";
import {Link} from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import {useDispatch, useSelector} from "react-redux";
import {changeSideMenuState, selectSideMenu} from "../../store/uiSlice";

const SideMenu = props => {
    const sideMenuVisible = useSelector(selectSideMenu)
    const dispatch = useDispatch();

    let styles = props.sideMenuVisible ? `${classes.sideMenu} ${classes.open}` : classes.sideMenu;

    const backdropClickHandler = () => {
        dispatch(changeSideMenuState())
    }

    const listItemClickHandler = () => {
        dispatch(changeSideMenuState())
    }

    return <Fragment>
        {sideMenuVisible &&
        <Backdrop onClick={backdropClickHandler}/>}
        <div className={styles}>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuItem}><Link to="/planner" onClick={listItemClickHandler}>Get Started</Link></li>
                <li className={classes.sideMenuItem}><Link to="/login" onClick={listItemClickHandler}>Login</Link></li>
                <li className={classes.sideMenuItem}><Link to="/pricing" onClick={listItemClickHandler}>Pricing</Link></li>
            </ul>
        </div>
    </Fragment>
}

export default SideMenu;