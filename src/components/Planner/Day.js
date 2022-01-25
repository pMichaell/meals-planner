import classes from "./Day.module.css"

const Day = props => {
    return <div className={classes.card}>
        <h2 className={classes.dayName}>{props.day}</h2>
    </div>
}

export default  Day;