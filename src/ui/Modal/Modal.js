import classes from "./Modal.module.css"
import ReactDOM from "react-dom";
import {Fragment} from "react";
import Backdrop from "../Backdrop/Backdrop";


const ModalOverlay = props => {
    return <div className={classes.modal}>
        {props.children}
    </div>
}

const Modal = props => {
    const portalElement = document.getElementById("overlays");

    return (
        <Fragment>
            <Backdrop onClick={props.onBackdropClick}>
                {props.children}
            </Backdrop>
        </Fragment>
    )
}

export default Modal;

