import classes from "./Foter.module.css"
import {Fragment} from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Fragment>
            <footer className={classes.footer}>
                <div className={classes.footerBreak}/>
                <div className={classes.div}><Link className={classes.link} to="/about">About us</Link></div>
            </footer>
        </Fragment>
    )
}

export default Footer;