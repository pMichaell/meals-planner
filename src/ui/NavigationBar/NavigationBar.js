import classes from "./NavigationBar.module.css"
import {useNavigate} from "react-router-dom";
import BasicCard from "../BasicCard/BasicCard";

const NavigationBar = props => {
    const navigate = useNavigate();

    const cardStyling = props.className;

    const clickHandler = () => {
        navigate(`${props.path}`);
    }

    return <BasicCard className={cardStyling} onClick={clickHandler}>
        <h2 className={classes.h2}>{props.name}</h2>
    </BasicCard>
}

export default  NavigationBar;