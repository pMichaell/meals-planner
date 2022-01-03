import Header from "./Header/Header";
import {Fragment, useState} from "react";
import classes from "./Layout.module.css"

const Layout = props => {

    return (
        <Fragment>
            <Header/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout;