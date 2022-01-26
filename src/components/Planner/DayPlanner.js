import classes from "./DayPlanner.module.css";
import {useParams} from "react-router-dom";
import NavigationBar from "./NavigationBar";

const DayPlanner = () => {
    const params = useParams();

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h1>Pick meal for each part of {params.day}</h1></div>
        <div className={classes.mealPickContainer}>
            <NavigationBar name="breakfast" path="breakfast/ingredients" style={{cardStyling: classes.card}}/>
            <NavigationBar name="dinner" path="dinner/ingredients" style={{cardStyling: classes.card}}/>
            <NavigationBar name="supper" path="supper/ingredients" style={{cardStyling: classes.card}}/>
        </div>
    </div>
}

export default DayPlanner;