import classes from "./NavigationBar.module.css"
import {useNavigate} from "react-router-dom";
import BasicCard from "../BasicCard/BasicCard";
import {useEffect} from "react";

const NavigationBar = props => {
    const navigate = useNavigate();

    const cardStyling = props.className;

    const redirect = () => {
        navigate(`${props.path}`);
    }

    return <BasicCard className={cardStyling} onClick={redirect}>
        <h2 className={classes.h2}>{props.name}</h2>
    </BasicCard>
}

export default  NavigationBar;