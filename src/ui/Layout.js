import Header from "./Header/Header";
import {Fragment, useState} from "react";
import classes from "./Layout.module.css"
import Footer from "./Footer/Footer";

const Layout = props => {

    return (
        <Fragment>
            <div className={classes.container}>
                <Header/>
                <main className={classes.main}>
                    <div className={classes.headerBreak}/>
                    <main>{props.children}</main>
                </main>
                <div className={classes.footerBreak}/>
                <Footer/>
            </div>
        </Fragment>
    )
}

export default Layout;