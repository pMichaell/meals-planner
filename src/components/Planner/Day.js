import classes from "./Day.module.css"
import {useNavigate} from "react-router-dom";

const Day = props => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`./${props.day}`);
    }

    return <div className={classes.card} onClick={redirect}>
        <h2 className={classes.dayName}>{props.day}</h2>
    </div>
}

export default  Day;