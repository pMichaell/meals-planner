import classes from "./Backdrop.module.css"
import ReactDOM from "react-dom";
import {Fragment} from "react";

const Backdrop = props => {
    const portalElement = document.getElementById("overlays")

    return <Fragment>
        {ReactDOM.createPortal(<div className={classes.backdrop} onClick={props.onClick}/>, portalElement)}
    </Fragment>
}

export default Backdrop;