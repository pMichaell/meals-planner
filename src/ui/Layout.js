import Header from "./Header/Header";
import {Fragment, useState} from "react";
import classes from "./Layout.module.css"
import Footer from "./Footer/Footer";

const Layout = props => {

    return (
        <Fragment>
            <div className={classes.content}>
                <Header/>
                <div className={classes.headerBreak}/>
                <main className={classes.main}>{props.children}</main>
                <div className={classes.footerBreak}/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Layout;