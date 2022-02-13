import classes from "./NamePicker.module.css"
import BasicContainer from "../../../ui/BasicComponents/BasicContainer/BasicContainer";
import BasicHeader from "../../../ui/BasicComponents/BasicHeader/BasicHeader";
import BasicButton from "../../../ui/BasicComponents/BasicButton/BasicButton";
import {useEffect, useRef} from "react";

const NamePicker = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    return <BasicContainer className={classes.container}>
        <h1 className={classes.header}>Name your brand new plan!</h1>
        <div className={classes.contentsContainer}>
            <input type="text" ref={inputRef} className={classes.input}/>
            <BasicButton className={classes.submitButton}>Submit</BasicButton>
        </div>
    </BasicContainer>
}

export default NamePicker;