import classes from "./Modal.module.css"
import ReactDOM from "react-dom";
import {Fragment} from "react";
import Backdrop from "../Backdrop/Backdrop";



const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {
    const portalElement = document.getElementById("overlays");

    return (
        <Fragment>
            <Backdrop/>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)};
        </Fragment>
    )
}

export default Modal;

