import classes from "./NamePicker.module.css"
import BasicContainer from "../../../ui/BasicComponents/BasicContainer/BasicContainer";
import BasicButton from "../../../ui/BasicComponents/BasicButton/BasicButton";
import {useEffect, useRef, useState} from "react";


const NamePicker = () => {
    const inputRef = useRef(null);
    const [errorPresent, setErrorPresent] = useState(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const inputChangeHandler = () => {
        if(inputRef.current.value.length !== 0) setErrorPresent(false);
    }

    const buttonClickHandler = () => {
        if (inputRef.current.value.length === 0) {
        setErrorPresent(true);
        inputRef.current.focus();
        }
    }

    return <BasicContainer className={classes.container}>
        <h1 className={classes.header}>Name your brand new plan!</h1>
        <div className={classes.contentsContainer}>
            <input type="text" ref={inputRef} onChange={inputChangeHandler} className={classes.input}/>
            {errorPresent && <p>Plan name can't be empty!</p>}
            <div className={classes.publishContainer}>
                <h3>Would you like to set your plan as public?</h3><input className={classes.checkBox} type="checkbox"/>
                <div className={classes.sliderContainer}>
                    <h4>NO</h4>
                    <div className={classes.slider}>
                        <input type="checkbox" value="None" id="slideTwo" name="check"/>
                        <label htmlFor="slideTwo"/>
                    </div>
                    <h4>YES</h4>
                </div>
            </div>
            <BasicButton className={classes.submitButton} onClick={buttonClickHandler}>Submit</BasicButton>
        </div>
    </BasicContainer>
}

export default NamePicker;