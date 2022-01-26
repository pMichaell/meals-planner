import classes from "./PlannerIntroduction.module.css"
import Day from "./Day";

const PlannerIntroduction = () => {
    return <div className={classes.container}>
        <div className={classes.headerContainer}>
            <h2>Pick a day!</h2>
        </div>
        <div className={classes.daysContainer}>
            <Day day="Monday"/>
            <Day day="Tuesday"/>
            <Day day="Wednesday"/>
            <Day day="Thursday"/>
            <Day day="Friday"/>
            <Day day="Saturday"/>
            <Day day="Sunday"/>
        </div>
    </div>
}

export default PlannerIntroduction;