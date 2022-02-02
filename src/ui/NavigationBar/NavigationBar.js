import classes from "./NavigationBar.module.css"
import {useNavigate} from "react-router-dom";

const NavigationBar = props => {
    const navigate = useNavigate();

    const {cardStyling} = props.style;

    const styles = `${cardStyling} ${classes.divShadow}`

    const redirect = () => {
        navigate(`${props.path}`);
    }

    return <div className={styles} onClick={redirect}>
        <h2 className={classes.h2}>{props.name}</h2>
    </div>
}

export default  NavigationBar;