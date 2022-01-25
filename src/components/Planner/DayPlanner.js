import classes from "./DayPlanner.module.css";
import {useParams} from "react-router-dom";

const DayPlanner = () => {
    const params = useParams();

    return <div className={classes.div}>
        {params.day}
    </div>
}

export default DayPlanner;