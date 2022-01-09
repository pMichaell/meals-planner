import Header from "./Header/Header";
import {Fragment, useState} from "react";
import classes from "./Layout.module.css"
import Footer from "./Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {changeSideMenuState, selectSideMenu} from "../store/uiSlice";

const Layout = props => {
    const sideMenuVisible = useSelector(selectSideMenu);
    const dispatch = useDispatch();

    const sideMenuHandler = () => {
        if (sideMenuVisible) {
            dispatch(changeSideMenuState())
        }
    }


    return (
        <Fragment>
            <div className={classes.container}>
                <Header/>
                <div className={classes.headerBreak}/>
                <main className={classes.main} onClick={sideMenuHandler}>
                    {props.children}
                </main>
                <div className={classes.footerBreak}/>
                <Footer/>
            </div>
        </Fragment>
    )
}

export default Layout;