import {Fragment} from "react";
import classes from "./FallbackContent.module.css"
import {useNavigate} from "react-router-dom";
import NavigationBar from "../../../ui/NavigationBar/NavigationBar";
import BasicCard from "../../../ui/BasicCard/BasicCard";

const FallbackContent = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("../")
    }

    return <Fragment>
        <NavigationBar name="Pick Other Ingredients" path="./ingredients" className={classes.card}/>
        <h1 className={classes.or}>Or</h1>
        <BasicCard className={classes.card} onClick={clickHandler}>
            <h2 className={classes.h2}>I'm feeling lucky!</h2>
        </BasicCard>
    </Fragment>
}

export default FallbackContent;